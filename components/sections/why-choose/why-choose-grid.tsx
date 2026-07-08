import { whyChooseItems } from "./why-choose-data";
import WhyChooseCard from "./why-choose-card";

export default function WhyChooseGrid() {

  return (

    <div className="why-grid">

      {whyChooseItems.map((item) => (

        <WhyChooseCard
          key={item.id}
          item={item}
        />

      ))}

    </div>

  );

}