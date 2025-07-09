// LayoutWrapper.tsx
import React from "react";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen w-full text-white overflow-hidden">
      {/* Global Background Gradient Overlay */}
      <div className="absolute inset-0 -z-10 w-full h-full bg-[#0E1C41]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1430] via-[#0E1C41]/60 to-[#0A1430] opacity-95" />
      </div>

      {/* Page Content */}
      {children}
    </div>
  );
};

export default LayoutWrapper;
