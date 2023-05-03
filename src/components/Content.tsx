import DataModel from "../models/DataModel"

const Content: React.FC<{items: DataModel}> = (props) => {
    return <>
        <section className="sm:container m-10 p-4 mx-auto bg-stone-600 text-slate-200 rounded-lg">
                    <div className="container mx-auto">
                <div className="flex flex-row flex-wrap py-4">
                    <aside className="w-full sm:w-1/3 md:w-1/4 px-2">
                        <div className="sticky top-0 p-4 w-full">
                        <img src={props.items.img} className="max-h-80"/>
                <div className="bg-white w-100% text-black ">{props.items.name}</div>
                <div className="bg-white w-100% text-black ">{props.items.composition}</div>
                <div className="bg-white w-100% text-black ">{props.items.form}</div>
                <div className="bg-white w-100% text-black ">{props.items.category}</div>
                <div className="bg-white w-100% text-black ">{props.items.manufacturer}</div>
                        </div>
                    </aside>
                    <main role="main" className="w-full sm:w-2/3 md:w-3/4 pt-1 px-2">
                    <div className="bg-white w-100% text-black rounded-md">{props.items.indications}</div>
                <div className="bg-white w-100% text-black rounded-md">{props.items.dose}</div>
                <div className="bg-white w-100% text-black rounded-md">{props.items.pregnancyCategory}</div>
                <div className="bg-white w-100% text-black rounded-md">{props.items.lactationSafety}</div>
                    </main>
                </div>
            </div>
            <div className="flex justify-center gap-4" id="safety-col">
                <div className="bg-white w-100% text-black rounded-md">{props.items.contraIndications}</div>
                <div className="bg-white w-100% text-black rounded-md">{props.items.adverseEffects}</div>
            </div>
        </section>
    </>
};

export default Content;