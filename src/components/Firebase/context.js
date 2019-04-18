import React from 'react';

//.createContext() has two components 1. FirebaseContext.Provider and 2. FirebaseContext.Consumer; .Provider makes a firebase instance at the very top level of the react component tree and .Consumer is used to retrieve the instance if needed
const FirebaseContext = React.createContext(null);

export default FirebaseContext;