import './Schedule.css';

export function Schedule() {
  return (
    <section id="horario" className="section schedule" aria-labelledby="schedule-title">
      <div className="container">
        <div className="section-header">
          <h2 id="schedule-title" className="section-title">Horario de Atención</h2>
          <p className="section-subtitle">Te esperamos con los brazos abiertos</p>
        </div>

        <div className="schedule-card">
          <div className="schedule-icon" aria-hidden="true">🕒</div>
          <p className="schedule-days">Abiertos todos los días</p>
          <p className="schedule-time">3:00 PM - 11:00 PM</p>
          <p className="schedule-days">¡Ven a disfrutar!</p>
        </div>
      </div>
    </section>
  );
}
