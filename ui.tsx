import { Color4 } from '@dcl/sdk/math'
import { useState } from 'react' // Import 'useState' from 'react'
import ReactEcs, { Button, Input,  ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { getMessage } from './chatbot.tsx'

// ... other imports

// Add this state variable to store the response from the API
var apiResponse = ''

 // Initialize ReactEcs before setting the UI renderer

ReactEcsRenderer.setUiRenderer(() => {
   // Use state hook for user input
   const [currentTextString, setCurrentTextString] = useState("")
  return (
    
    <UiEntity
      // ... other UI properties
    >
      <Input
        onChange={(e) => {
          setCurrentTextString(e) // Update the state with user input
        }}
        fontSize={25}
        placeholder={'type something'}
        placeholderColor={Color4.Red()}
      />
      <Button
        value="Submit"
        variant="primary"
        uiTransform={{ width: 50, height: 50 }}
        onMouseDown={async () => {
          const response = await getMessage(currentTextString)
          apiResponse = response // Update the response state variable with the API response
          
        }}
      />
      <UiEntity
        uiTransform={{
          width: '100%',
          height: '100px',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        uiText={{ value: apiResponse, fontSize: 40 }} // Display the response in the UI text element
        uiBackground={{ color: Color4.create(0.5, 0.8, 0.1, 0.6) }}
      />
    </UiEntity>
  )
})