
export async function getMessage(userInput: string) {

  console.log('clicked')
  const options = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${'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'}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: userInput
        }
      ]
    })
  }
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options)
    const data = await response.json()
    console.log(data.choices[0].message.content)
    if (data.choices[0].message.content !== '') {
        return data.choices[0].message.content
    }
  } catch (error) {
    console.log(error)
  }
}
