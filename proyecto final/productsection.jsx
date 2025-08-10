import React from 'react';
import PlantCard from './PlantCard';

export default function ProductSection({ title, plants, onAdd }) {
  return (
    <section>
      <h2>{title}</h2>
      <div className="plant-list">
        {plants.map(plant => (
          <PlantCard key={plant.id} plant={plant} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );
}
