import { useSelector } from "react-redux";
import Pagination from "../pagination/Pagination";
import SearchBar from "../searchBar/SearchBar";
import SortDropdown from "../sortDropdown/SortDropdown";
import Tabs from "../tabs/Tabs";
import Spinner from "../customSpinner/Spinner";

export default function Table({
    tableTitle,
    tableSubTitle,

    columns,
    rows,

    secondlastColumnName,
    lastColumnName,

    searchBarData,
    searchBarSetData,
    searchBarKey,
    searchBarclassName,

    sortDropdownData,
    sortDropdownSetData,
    sortDropdownOptions,

    tabs,
    filterStatus,
    setFilterStatus,

    currentPage,
    totalPages,
    onPageChange,
    itemsPerPage,
    totalItems,

    tableHeight,
    isLoading,

    children
}) {

    const isCollapsed = useSelector((state) => state.sidebar.isCollapsed);

    // Function to extract nested values based on a key (e.g. 'Insurance.CPT')
    const getNestedValue = (obj, key) => {
        return key.split('.').reduce((acc, part) => acc && acc[part], obj);
    };

    return (
        <div className={`bg-white rounded-2xl p-4 flex flex-col flex-shrink-0 gap-4 font-poppins ${isCollapsed ? "w-[calc(100vw-115px)]" : 'w-[calc(100vw-300px)]'}`}>
            <div className="flex justify-between items-center ">

                <div className="htext">
                    <h2 className="text-2xl font-semibold">{tableTitle}</h2>
                    {tableSubTitle && (<h5 className="text-green-500 font-medium">{tableSubTitle}</h5>)}
                    {tabs && <Tabs tabs={tabs} activeTab={filterStatus} onTabChange={setFilterStatus} />}
                </div>

                <div className="flex items-center space-x-4">
                    {searchBarData && <SearchBar Data={searchBarData} setData={searchBarSetData} searchKey={searchBarKey} className={searchBarclassName} />}
                    {sortDropdownData && <SortDropdown Data={sortDropdownData} setData={sortDropdownSetData} options={sortDropdownOptions} />}
                </div>
            </div>

            <div className={`overflow-y-auto flex-shrink-0 ${tableHeight} `}>
                <table className="w-full">
                    <thead>
                        <tr>
                            {columns.map((column) => (
                                <th key={column.key} className="text-left text-gray-500 font-medium min-w-[140px]">
                                    {column.header}
                                </th>
                            ))}

                            {secondlastColumnName && <th className="text-start text-gray-500 font-medium py-3 px-5 min-w-[140px]">{secondlastColumnName}</th>}
                            {lastColumnName && <th className="text-start text-gray-500 font-medium py-3 px-5 min-w-[140px]">{lastColumnName}</th>}
                        </tr>
                    </thead>

                    <tbody className="overflow-x-auto">
                    {isLoading ? (
                        <tr>
                        <td
                            colSpan={columns.length + (secondlastColumnName ? 1 : 0) + (lastColumnName ? 1 : 0)}
                            className="text-center py-10"
                        >
                            <Spinner /> {/* Display spinner */}
                        </td>
                        </tr>
                    ) : rows && rows.length > 0 ? (
                        rows.map((row, index) => (
                        <tr key={index} className="border-t border-gray-200 border-b">
                            {columns.map((column) => (
                            <td key={column.key} className="text-left">
                                {column.transform
                                ? column.transform(row)
                                : getNestedValue(row, column.key) ?? "N/A"}
                            </td>
                            ))}
                            {children(row)}
                        </tr>
                        ))
                    ) : (
                        <tr>
                        <td
                            colSpan={columns.length + (secondlastColumnName ? 1 : 0) + (lastColumnName ? 1 : 0)}
                            className="text-center py-10 text-gray-500"
                        >
                            <img
                            src="/No data found.jpg" 
                            alt="No data found"
                            className={`mx-auto max-h-[220px] object-contain`}
                            />
                        </td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
            {totalItems > 0 && <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={onPageChange}
                itemsPerPage={itemsPerPage}
                totalItems={totalItems}
            />}
        </div>
    );
}