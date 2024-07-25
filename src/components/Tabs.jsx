import "./Tabs.css";
import PropTypes from "prop-types";
import { useRef } from "react";

Tabs.propTypes = {
  tabsList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      content: PropTypes.element.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
  /** Sets a label on the tablist element via aria-label. */
  label: PropTypes.string,
  /** The controlled value of the tab to activate. */
  value: PropTypes.string.isRequired,
  /** Event handler called when the value changes. */
  onValueChange: PropTypes.func.isRequired,
};

export default function Tabs(props) {
  const buttonRefs = useRef([]);

  const activeTabIndex = props.tabsList.findIndex(
    (tab) => tab.value === props.value
  );

  function handleKeyDown(event) {
    switch (event.key) {
      case "ArrowLeft":
        event.preventDefault();
        let prevIndex = activeTabIndex - 1;

        if (prevIndex < 0) {
          //Loop back to the end of the list
          prevIndex = props.tabsList.length - 1;
        }
        props.onValueChange(props.tabsList[prevIndex].value);

        //Add the line below
        buttonRefs.current[prevIndex].focus();
        break;
      case "ArrowRight":
        event.preventDefault();
        let nextIndex = activeTabIndex + 1;

        if (nextIndex >= props.tabsList.length) {
          //Exceeds array bounds to go back to the beginning of the list
          nextIndex = 0;
        }
        props.onValueChange(props.tabsList[nextIndex].value);

        //Add the line below
        buttonRefs.current[nextIndex].focus();
        break;
      default:
    }
  }

  return (
    <div className="tabsContainer">
      <div
        role="tablist"
        aria-label={props.label}
        aria-orientation="horizontal"
        onKeyDown={handleKeyDown}
      >
        {props.tabsList.map((tab, index) => (
          <button
            role="tab"
            ref={(node) => (buttonRefs.current[index] = node)}
            tabIndex={activeTabIndex === index ? 0 : -1}
            key={tab.id}
            id={tab.id}
            aria-controls={`${tab.id}-content`}
            aria-selected={activeTabIndex === index}
            onClick={() => props.onValueChange(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {props.tabsList.map((tab, index) => (
        <div
          role="tabpanel"
          tabIndex={0}
          aria-labelledby={tab.id}
          id={`${tab.id}-content`}
          key={tab.id}
          data-active-content={activeTabIndex === index}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
