import { Link } from '@reach/router'
import React, { FunctionComponent } from 'react'

type TabItem = Readonly<{ name: string; title: string }>
type TabsList = ReadonlyArray<TabItem>

export const NavigationLayout: FunctionComponent = ({ children }) => {
  const tabs: TabsList = [
    { name: 'decks', title: 'Decks' },
    { name: 'inbox', title: 'inbox' },
  ]

  return (
    <div className="min-h-screen bg-teal-800 text-teal-800 flex justify-center items-center">
      <section className="bg-white shadow rounded p-1 w-1/2">
        <header className="border-b border-teal-800">
          {tabs.map(({ name, title }) => (
            <Link key={name} to={`/${name}`} className="p-2">
              {title}
            </Link>
          ))}
        </header>
        <main className="p-2">{children}</main>
      </section>
    </div>
  )
}
