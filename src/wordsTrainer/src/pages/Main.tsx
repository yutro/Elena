import React, { FunctionComponent } from 'react'
import { RouteComponentProps } from '@reach/router'

import { NavigationLayout } from '../layouts'

type TabItem = Readonly<{ name: string; title: string }>
type TabsList = ReadonlyArray<TabItem>

export const Main: FunctionComponent<RouteComponentProps> = () => <NavigationLayout>main page content</NavigationLayout>
