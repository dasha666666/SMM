import { benefits } from "../../constants";
import "./style.scss";
//Для стилей мы использовали гриды и флексбоксы
const Benefits = () => {
  return (
    <div className="benefits">
      <div className="benefits__header">
        <h2 className="benefits__header-h2">
          Наши преимущества
        </h2>
      </div>
      <div className="benefits__block">
        {benefits.map(function(benefit, index) { 
          return(
            <p
              className="benefits__block-text"
              key={index}
            >
              {benefit}
            </p>
        )})}
      </div>
    </div>
  );
};

export default Benefits;
