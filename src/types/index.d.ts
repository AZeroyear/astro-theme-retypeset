import type { langPath } from '@/utils/ui'

export interface ThemeConfig {

  site: {
    title: string
    subtitle: string
    description: string
    author: string
    url: string
    favicon: string
  }

  color: {
    mode: 'light' | 'dark'
    light: {
      primary: string
      secondary: string
      background: string
    }
    dark: {
      primary: string
      secondary: string
      background: string
    }
  }

  global: {
    locale: typeof langPath[number]
    moreLocale: typeof langPath[number][]
    font: 'sans' | 'serif' | 'italic'
  }

  comment?: {
    waline?: {
      serverURL?: string
      emoji?: string[]
      search?: boolean
      imageUploader?: boolean
    }
  }

  seo?: {
    twitterID?: string
    facebookID?: string
    facebookLink?: string
    verification?: {
      google?: string
      bing?: string
      yandex?: string
      baidu?: string
    }
    googleAnalyticsID?: string
    umamiAnalyticsID?: string
    follow?: {
      feedID?: string
      userID?: string
    }
    siteScreenshot: string
  }

  footer: {
    linkA: {
      name: string
      url: string
    }
    linkB: {
      name: string
      url: string
    }
    linkC: {
      name: string
      url: string
    }
  }

  preload: {
    cdn: string
    commentURL?: string
    imageHostURL?: string
    customGoogleAnalyticsURL?: string
    customUmamiAnalyticsURL?: string
    customUmamiAnalyticsJS?: string
    lazyload: boolean
  }
}

export default ThemeConfig
