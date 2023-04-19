import styles from '@/styles/Aside.module.css'
import { useEffect, useState } from 'react';

export default function Aside({ tags }) {
    const [list, setList] = useState([]);

    function getTags() {
        const newList = tags.flatMap(subArray => subArray);
        setList(newList);
    }

    useEffect(() => {
        getTags();
    }, [tags]);

    console.log(list);

    return (
        <aside className={styles.aside}>
            <header className={styles.headerAside}>
                <h1>Tópicos</h1>
            </header>
            <main className={styles.categoryList}>

            </main>
        </aside>
    )
}
