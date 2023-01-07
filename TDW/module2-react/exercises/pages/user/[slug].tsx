import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Footer from '../../components/Footer'
import { LoadingIcon, LocationIcon } from '../../components/Icons'
import { getUserAsync, selectStatus, selectUsers } from '../../redux/slice'
import Error from '../404'

export default function User() {
    const router = useRouter()
    const slug = router.query.slug as string
    const dispatch = useDispatch()
    const users = useSelector(selectUsers)
    const status = useSelector(selectStatus)

    useEffect(() => {
        document.title = slug + " | GitHub Users"
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (slug != null && users[slug] == null)
            dispatch(getUserAsync(slug))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug])

    return (
        <>
            {
                users[slug] != null && status == 'default' ?
                    <div className={'page-content'}>
                        <div className={'user-profile'}>
                            <div className={'heading'}>
                                <div className={'profile-picture'} style={{ backgroundImage: `url(${users[slug].avatar_url})` }} />
                                <div className={'wrapper'}>
                                    <span className={'name'}>{users[slug].name}</span>
                                    <span className={'username'}>{users[slug].login}</span>

                                </div>
                                <span className={'type'}>{users[slug].type}</span>
                                {users[slug].location != null && <span className={'location'}>
                                    <LocationIcon width={16} height={16} color={'#ababab'} /> {users[slug].location}
                                </span>}
                            </div>
                            {users[slug].repos != null &&
                                <div className={'repos'}>
                                    {users[slug].repos.slice(0, 5).map((repo: any) => (
                                        <Link key={repo.id} target={'_blank'} href={repo.html_url} className={'repo'}>{repo.language != null ? `[${repo.language}]` : ''} <b>{repo.name}</b> {repo.description != null ? `(${repo.description})` : ''}</Link>
                                    ))}
                                    <Link className={'see-more'} href={users[slug].html_url + '?tab=repositories'} target={'_blank'}>See more</Link>
                                </div>
                            }
                        </div>
                        < Footer />
                    </div> :
                    status == 'loading' ?
                        <div className={'page-content'}>
                            <LoadingIcon height={100} />
                            < Footer />
                        </div> : <Error type={'user'} />
            }
        </>
    )
}