import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
function FinalLoading() {
  return (
    <div className="flex flex-col justify-center items-center h-[90vh] w-[400px">
      <CircularProgress
        sx={{ color: "orange", width: "150px", height: "150px" }}
      />
      <p className="text-xl font-semibold">
        Finding Learning path recommendations for you based on your responses
      </p>
    </div>
  );
}

export default FinalLoading;
