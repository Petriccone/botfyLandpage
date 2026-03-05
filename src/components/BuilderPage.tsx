import { useEffect, useState } from 'react'
import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react'

// TODO: Replace with your actual Builder.io Public API Key
builder.init('YOUR_BUILDER_API_KEY')

interface BuilderPageProps {
  model?: string
}

export function BuilderPage({ model = 'page' }: BuilderPageProps) {
  const [content, setContent] = useState<any>(null)
  const [notFound, setNotFound] = useState(false)
  const isPreviewing = useIsPreviewing()

  useEffect(() => {
    async function fetchContent() {
      const page = await builder
        .get(model, {
          url: window.location.pathname,
        })
        .toPromise()

      if (page) {
        setContent(page)
      } else {
        setNotFound(true)
      }
    }
    fetchContent()
  }, [model])

  if (notFound && !isPreviewing) {
    return null
  }

  return <BuilderComponent model={model} content={content} />
}
