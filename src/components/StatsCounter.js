import { useEffect, useState } from 'react';

function StatsCounter() {
  const [customers, setCustomers] = useState(0);
  const [years, setYears] = useState(0);
  const [installations, setInstallations] = useState(0);

  useEffect(() => {
    let customerTarget = 500;
    let yearsTarget = 25;
    let installTarget = 1500;

    // Slower animation settings
    let speed = 40; // higher value = slower animation

    let customerInterval = setInterval(() => {
      setCustomers(prev => {
        if (prev < customerTarget) return prev + 2; // smaller step
        clearInterval(customerInterval);
        return customerTarget;
      });
    }, speed);

    let yearsInterval = setInterval(() => {
      setYears(prev => {
        if (prev < yearsTarget) return prev + 1;
        clearInterval(yearsInterval);
        return yearsTarget;
      });
    }, 150); // also slowed down

    let installInterval = setInterval(() => {
      setInstallations(prev => {
        if (prev < installTarget) return prev + 5; // smaller step
        clearInterval(installInterval);
        return installTarget;
      });
    }, speed);

    return () => {
      clearInterval(customerInterval);
      clearInterval(yearsInterval);
      clearInterval(installInterval);
    };
  }, []);

  return (
    <section className="bg-light py-5">
      <div className="container text-center">
        <h2 className="mb-4" style={{ color: '#88a3ff'}}>Our Journey So Far</h2>
        <div className="row">
          <div className="col-md-4">
            <h1 className="display-4 text-primary">{customers}+</h1>
            <p className="lead">Satisfied Customers</p>
          </div>
          <div className="col-md-4">
            <h1 className="display-4 text-primary">{years}+</h1>
            <p className="lead">Years of Expertise</p>
          </div>
          <div className="col-md-4">
            <h1 className="display-4 text-primary">{installations}+</h1>
            <p className="lead">Successful Installations</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StatsCounter;
