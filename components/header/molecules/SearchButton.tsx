import siteMetadata from '@/data/siteMetadata'
import { AlgoliaButton } from 'pliny/search/AlgoliaButton'
import { KBarButton } from 'pliny/search/KBarButton'
import SearchIcon from '../atoms/SearchIcon'

const SearchButton = () => {
  if (
    siteMetadata.search &&
    (siteMetadata.search.provider === 'algolia' || siteMetadata.search.provider === 'kbar')
  ) {
    const SearchButtonWrapper =
      siteMetadata.search.provider === 'algolia' ? AlgoliaButton : KBarButton

    return (
      <SearchButtonWrapper aria-label="Search">
        <SearchIcon />
      </SearchButtonWrapper>
    )
  }
}

export default SearchButton
