import React from "react";
import { GetLaunchesAPI } from "../../api/GetLaunches";

export const launchContextDefaults = {
  listLaunches: Function,
  items: [],
  sort: false,
  setSort: Function,
  filter: "",
  setFilter: Function,
  years: [],
  loading: false,
  error: undefined,
};

export const LaunchContext = React.createContext(launchContextDefaults);
export const useLaunchContext = () => React.useContext(LaunchContext);

const getYears = (launches) => {
  if (!launches) return [];

  const dates = launches.map((launch) => {
    const date = launch.launch_year;
    return date;
  });

  return [...new Set(dates)];
};

export const LaunchProvider = ({ children }) => {
  const [items, setItems] = React.useState([]);
  const [sort, setSort] = React.useState(false);
  const [filter, setFilter] = React.useState("");
  const [years, setYears] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(undefined);

  return (
    <LaunchContext.Provider
      value={{
        listLaunches: React.useCallback(async () => {
          setFilter("");
          const response = await GetLaunchesAPI(setLoading, setError);
          setItems(response);
          setYears(getYears(response));
        }, []),
        items,
        sort,
        setSort,
        filter,
        setFilter,
        years,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </LaunchContext.Provider>
  );
};
