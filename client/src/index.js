import reactDOM from "react-dom";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import App from "./App";
import {store, persi_store} from "./reducers/index";

reactDOM.render(
	<Provider store={store}>
		<PersistGate loading={"null"} persistor={persi_store}>
			<App />
		</PersistGate>
	</Provider>, document.getElementById("root"));