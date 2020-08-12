import React from "react";
import { Link } from "gatsby";

import { slugify } from "../utils/handlers";

interface cardProps {
  category: any;
}

export default function Card({ category }: cardProps) {
  return (
    <Link to={`/journeys/${slugify(category)}`} className="card">
      <div className={`${category}-card`} />
      <h3 className="card-title">
        {category[0].toUpperCase() + category.slice(1)}
      </h3>
    </Link>
  );
}
