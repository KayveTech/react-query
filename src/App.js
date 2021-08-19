import React from 'react'
import { QueryClient, QueryClientProvider} from 'react-query'
import Posts from './components/Posts'

import './App.css'

const queryClient = new QueryClient()

function App() {
  return (

      <QueryClientProvider client={queryClient}>
       <Posts />
        </QueryClientProvider>
    
  )
}

export default App

// You can use this instance to 
// The QueryClient instance is a React Component.
// You can render it anywhere you want.
// You can also pass props to the QueryClient instance.
// For example, you can pass the client to a child component of QueryClientProvider.
// This child component will be able to access the hooks provided by React Query library.
// The QueryClientProvider will wrap your application and provide you with a QueryClient instance.