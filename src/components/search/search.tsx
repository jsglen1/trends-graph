"use client";

import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useEffect, useState } from "react";
import axios from "axios";

import {
  ApiTimelineDataResponse,
  TimelineDataPoint,
  Topic,
} from "@/interfaces/trend";
import LineChart from "../line-chart/line-chart";

export function CommandSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Topic[] | null>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [graphData, setGraphData] = useState<TimelineDataPoint[]>();
  let typingTimer: ReturnType<typeof setTimeout>;

  const handleSearch = async (term: string) => {
    try {
      setLoading(true);
      const response = await axios.post(`/api/trend/auto-complete`, {
        msj: term.toLowerCase(),
      });
      const top = response.data;
      // console.log(JSON.stringify(top));
      setSearchResults(top.results);
      setError("");
    } catch (error) {
      setSearchResults(null);
      setError("No results found.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    clearTimeout(typingTimer);
    if (searchTerm.trim() !== "") {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      typingTimer = setTimeout(() => {
        handleSearch(searchTerm);
      }, 1000); // Espera 2 segundos después de dejar de escribir
    } else {
      setSearchResults(null);
    }

    return () => {
      clearTimeout(typingTimer);
    };
  }, [searchTerm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleInterestOverTime = async (title: string) => {
    setSearchResults(null);
    try {
      // setLoading(true);
      const response = await axios.post<ApiTimelineDataResponse>(
        `/api/trend/interest-over-time`,
        {
          msj: title.toLowerCase(),
        }
      );

      //console.log(JSON.stringify(response.data.results.default.timelineData));
      setGraphData(response.data.results.default.timelineData);
      //setSearchResults(top.results);
      //setError("");
    } catch (error) {
      //setSearchResults(null);
      //setError("No results found.");
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="flex flex-col space-y-10">
      <Command className="rounded-lg border shadow-md">
        <CommandInput
          placeholder="Type a command or search..."
          onChangeCapture={handleChange}
        />
        <CommandList>
          {loading && <CommandEmpty>Loading...</CommandEmpty>}
          {!loading && error && <CommandEmpty>{error}</CommandEmpty>}
          {!loading && !error && searchResults === null && (
            <CommandEmpty>No results found.</CommandEmpty>
          )}
          <div className="p-5 space-y-2">
            {searchResults &&
              searchResults.map((topic) => (
                <div
                  key={topic.mid}
                  className="flex flex-col items-start justify-start cursor-pointer hover:p-1"
                  onClick={() => {
                    handleInterestOverTime(topic.title);
                  }}
                >
                  <span>{topic.title}</span>
                  <p className="text-sm">{topic.type}</p>
                </div>
              ))}
          </div>
          <CommandSeparator />
        </CommandList>
      </Command>
      <div className="flex w-full md:w-1/2 md:h-1/2 items-center justify-center">
        <LineChart graphData={graphData} />
      </div>
    </div>
  );
}
