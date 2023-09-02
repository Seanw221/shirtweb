import React from 'react'

import CustomButton from './CustomButton';

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit}) => {
  return (
    <div className="aipicker-container">
      <textarea
         placeholder="What Design Would You Like?" 
         rows={5}
         value={prompt}
         onChange={(e) => setPrompt(e.target.value)}
         className="aipicker-textarea"
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton 
           type="outline"
           title="Ask Me"
           customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton 
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit('logo')}
              customStyles="text-xs"
            />
            <CustomButton 
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit('full')}
              customStyles="text-xs"
            />
          </>
        )}
          
        

      </div>
    </div>
  )
}

export default AIPicker
