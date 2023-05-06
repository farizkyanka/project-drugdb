import DataModel from '../models/DataModel';

const Content: React.FC<{ items: DataModel }> = (props) => {
  return (
    <>
      <section className="container max-w-screen-lg m-10 mx-auto bg-stone-600 text-slate-200 ">
        <div className="grid md:grid-cols-12 text-center">
          <div className="md:col-span-4 flex flex-wrap justify-center bg-blue-700 text-center p-10">
            <img src={props.items.img} className="w-full" />
            <h2 className="w-full">{props.items.name}</h2>
            <h2 className="w-full">{props.items.composition}</h2>
            <h2 className="w-full">{props.items.form}</h2>
          </div>
          <div className="md:col-span-6 bg-red-500 md:text-left">
            <p>{props.items.pregnancyCategory}</p>
          </div>
          <div className="md:col-span-2 bg-green-500 md:text-left">column</div>
        </div>
      </section>
    </>
  );
};

export default Content;
// {props.items.img}
// {props.items.name}
// {props.items.composition}
// {props.items.form}
// {props.items.category}
// {props.items.manufacturer}
// {props.items.indications}
// {props.items.dose}
// {props.items.pregnancyCategory}
// {props.items.lactationSafety}
// {props.items.contraIndications}
// {props.items.adverseEffects}
