import { useEffect } from 'react';
import M from 'materialize-css';
const About = () => {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="container">
      <ul className="collapsible">
        <li className="active">
          <div className="collapsible-header">
            <i className="material-icons">movie_filter</i>
            The Films
          </div>
          <div className="collapsible-body">
            <p>
              Here you can see the information of the most famous films in the
              world
            </p>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <i className="material-icons">place</i>
            Nations
          </div>
          <div className="collapsible-body">
            <p>
              Films originating from different nations often reflect the unique
              cultural, social, and historical contexts of their respective
              countries
            </p>
          </div>
        </li>
        <li>
          <div className="collapsible-header">
            <i className="material-icons">date_range</i>
            Daily news
          </div>
          <div className="collapsible-body">
            <p>We update new and hot films every day</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default About;
