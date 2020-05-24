import React, { FormEvent, FunctionComponent, useRef } from 'react'

export const Add: FunctionComponent<{
  label: string
  onSubmit: (text: string) => void
  target?: string
}> = ({ target, label, onSubmit }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const submitHandler = (e: FormEvent) => {
    e.preventDefault()

    const { current: inputNode } = inputRef

    if (inputNode) {
      onSubmit(inputNode.value)
      inputNode.value = ''
    }
  }

  return (
    <form {...(target && { target })} className="flex items-end" onSubmit={submitHandler}>
      <label>
        {label}
        <input ref={inputRef} type="text" placeholder="Title" className="block rounded border p-1 pl-2 my-1" />
      </label>
      <button type="submit" title="add deck" className="gg-add-r mb-2 ml-2 hover:text-teal-500" />
    </form>
  )
}
