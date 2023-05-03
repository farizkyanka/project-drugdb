export default function Navbar() {
    return <>
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm py-4 dark:bg-gray-800">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between" aria-label="Global">
            <input type="text" className="rounded-full items-center px-3 py-2 mx-auto w-1/2" placeholder="Search for drug name, composition, brand, etc..."/>
        </nav>
        </header>
    </>
};