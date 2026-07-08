import type { WhyChooseItem } from "./why-choose.types";

interface Props {
  item: WhyChooseItem;
}

export default function WhyChooseCard({
  item,
}: Props) {

  const Icon = item.icon;

  return (

    <article className="why-card">

      <div className="why-card-icon">

        <Icon
          size={30}
          strokeWidth={2.2}
        />

      </div>

      <h3 className="why-card-title">
        {item.title}
      </h3>

      <p className="why-card-description">
        {item.description}
      </p>

    </article>

  );
}