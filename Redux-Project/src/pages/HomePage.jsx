
import { useSelector } from 'react-redux'
import ResultGrid from '../components/resultGrid'
import SearchBar from '../components/searchBar'
import Tabs from '../components/tabs'
const HomePage = () => {

    const { query } = useSelector((store) => store.search)

    return (
        <div>

            <SearchBar />

            {query != '' ? <div><Tabs /><ResultGrid /></div> : ''}
        </div>
    )
}

export default HomePage