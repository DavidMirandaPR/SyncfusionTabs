import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective,
} from '@syncfusion/ej2-react-navigations';

const MyTabsComponent = () => {
  const [counter, setCounter] = useState(1);
  const tabsRef = useRef();
  const addButtonClicked = (e) => {
    let tabNumber = counter;
    setCounter((prev) => prev + 1);
    let newTabItem = [
      {
        id: `TABID-${tabNumber}`,
        header: { text: `Tab #${tabNumber}` },
        content: () => (
          <div>
            <h1>{`Tab #${tabNumber}`}</h1>
            <h1>{Math.random()}</h1>
          </div>
        ),
      },
    ];
    tabsRef.current.addTab(newTabItem, tabsRef.current.items.length);
  };

  const refreshActiveTab = () => {
    tabsRef.current.refreshActiveTab();
  };

  const refreshTabs = () => {
    tabsRef.current.refresh();
  };

  return (
    <div id="container">
      <p>Recreation Steps:</p>
      <ol>
        <li>Add Tabs until you have at least 4 tabs</li>
        <li>
          Select the Tab #3 to make it the active tab and click on "Refresh
          Active Tab"
        </li>
        <li>
          Select the tabs to the left of the tab currently selected their
          content its removed.
        </li>
        <li>To reset the values of all tabs hit the "Refresh All" button</li>
      </ol>
      <button
        id="add"
        className="btn btn-primary"
        style={{ margin: '5px' }}
        onClick={addButtonClicked}
      >
        + New Tab
      </button>
      <button
        id="add"
        className="btn btn-primary"
        style={{ margin: '5px' }}
        onClick={refreshActiveTab}
      >
        Refresh Active Tab
      </button>
      <button
        id="add"
        className="btn btn-primary"
        style={{ margin: '5px' }}
        onClick={refreshTabs}
      >
        Refresh All Tabs
      </button>
      <TabComponent
        overflowMode={'Popup'}
        showCloseButton={true}
        id="tabElement"
        ref={tabsRef}
      >
        <TabItemsDirective>
          <TabItemDirective
            header={{ text: 'Home' }}
            content={() => (
              <div>
                <h1>Home</h1>
                <h1>{Math.random()}</h1>
              </div>
            )}
            id="Home"
            cssClass="fixed"
          />
        </TabItemsDirective>
      </TabComponent>
    </div>
  );
};

const App = ({ children }) => {
  return children;
};

let root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App>
    <MyTabsComponent />
  </App>
);
