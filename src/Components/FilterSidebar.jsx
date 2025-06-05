import React from "react";
import { List, Grid } from "lucide-react";

const FilterSidebar = ({
  search,
  setSearch,
  priceRange,
  setPriceRange,
  location,
  setLocation,
  type,
  setType,
  sort,
  setSort,
  viewMode,
  setViewMode,
}) => {
  return (
    <div className="w-full h-fit sticky top-[100px] lg:w-80 p-6 mb-6 lg:mb-0 lg:mr-6 bg-gradient-to-br from-slate-200 to-slate-100 text-black rounded-2xl shadow-xl border border-slate-300 space-y-5">
      <input
        type="text"
        placeholder="🔍 Search by title..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full px-4 py-2 rounded-xl bg-white border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div>
        <label className="block mb-2 text-sm font-semibold text-gray-700">Price Range ($)</label>
        <div className="flex gap-3">
          <input
            type="number"
            placeholder="Min"
            value={priceRange?.[0] ?? 0}
            onChange={e => setPriceRange([+e.target.value, priceRange?.[1] ?? 500000])}
            className="w-1/2 px-3 py-2 rounded-xl border border-gray-300 bg-white shadow-sm"
          />
          <input
            type="number"
            placeholder="Max"
            value={priceRange?.[1] ?? 500000}
            onChange={e => setPriceRange([priceRange?.[0] ?? 0, +e.target.value])}
            className="w-1/2 px-3 py-2 rounded-xl border border-gray-300 bg-white shadow-sm"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">Location</label>
        <select
          value={location}
          onChange={e => setLocation(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white shadow-sm"
        >
          <option value="">All Locations</option>
          <option value="Hammer Springs">Hammer Springs</option>
          <option value="Hadley Wood Drive">Hadley Wood Drive</option>
          <option value="Palm Grove">Palm Grove</option>
          <option value="Downtown District">Downtown District</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">Type</label>
        <select
          value={type}
          onChange={e => setType(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white shadow-sm"
        >
          <option value="">All Types</option>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700">Sort By</label>
        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
          className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white shadow-sm"
        >
          <option value="newest">Newest</option>
          <option value="lowest">Lowest Price</option>
          <option value="highest">Highest Price</option>
        </select>
      </div>

      <div className="flex items-center gap-3 mt-4">
        <button
          onClick={() => setViewMode("grid")}
          className={`flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
            viewMode === "grid"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <Grid size={16} />
          Grid
        </button>
        <button
          onClick={() => setViewMode("list")}
          className={`flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-medium transition-all ${
            viewMode === "list"
              ? "bg-blue-600 text-white shadow-md"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          <List size={16} />
          List
        </button>
      </div>
    </div>
  );
};

export default FilterSidebar;
