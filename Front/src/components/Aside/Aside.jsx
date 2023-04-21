import styles from '@/styles/Aside.module.css'
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Aside({ tags }) {
    const [list, setList] = useState([]);

    function getTags() {
        const newList = tags.flatMap(subArray => subArray);
        const uniqueList = newList.filter((tag, index, array) => {
            return array.indexOf(tag) === index;
        });
        setList(uniqueList);
    }

    useEffect(() => {
        getTags();
    }, [tags]);
    
    return (
        <aside className={styles.aside}>
            <header className={styles.headerAside}>
                <h1>Tópicos✔️</h1>
            </header>
            <ul className={styles.categoryList}>
                {list.map(tag => {
                    return (
                        <Link href='' key={tag} className={styles.listItem}>
                            <p>{tag}</p>
                        </Link>
                    )
                })}
            </ul>
        </aside>
    )
}
