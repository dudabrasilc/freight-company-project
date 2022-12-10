import { Link } from 'react-router-dom';
import DriverCard from "./DriverCard";

function DriversList({ drivers, setDrivers }) {

  function handleRemoveDriver(removedDriver) {
    const updatedDriversList = drivers.filter((driver) => driver.id !== removedDriver.id);
    setDrivers(updatedDriversList);
  }

  const driversArray = drivers.map(driver => {
    return (
      <div key={driver.id}>
        <Link to={`Drivers/${driver.id}`}>
          <DriverCard name={driver.name} id= {driver.id} img_url={driver.img_url}/>
        </Link>
      </div>
    )
  })

  return (
    <>
      <br></br>
      <h2 className="header-list">For more information about a driver and to check the driver's loads/trucks, click on the avatar.</h2>
      <div className='cards'>
        {driversArray}
      </div>
    </>
  )
}

export default DriversList;
