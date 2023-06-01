import Link from "next/link"
import styles from "./page.module.css"
import generalStyles from "@/app/cssComponents/smallPage.module.css"

export default function Privacy() {
    return (
        <main className={[generalStyles.main, styles.main].join(' ')}>
            <h1> Website </h1>
            <h2 className={styles.heading}> General </h2>
            <p>
                This Website itself does not use Cookies and / or tracking to track you.
                However, the Hoster of the Website and / or provider may do that.
                Those privacy policies are here to find:
            </p>
            <ul className={styles.webPrivacyList}>
                <li>
                    <a href="https://vercel.com/legal/privacy-policy">Hoster</a>
                </li>
                <li>
                    <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/">Provider</a>
                </li>
            </ul>
            <h1> Apps </h1>
            <h2 className={styles.heading}> General </h2>
            <p>
                Currently, my Apps do not send any Data to the Internet
                and do also not retrieve them.
                The Apps only access data you - the User - provided and
                entered in the App.
                If the Data are sensitive, they are encrypted.
            </p>
            <h2 className={styles.heading}> Flutter Specific </h2>
            <p>
                For some of my Apps i use <a href="https://dart.dev">Googles Language Dart</a> and the corresponding <a href="https://flutter.dev">Framework Flutter</a>.
                You can find more about these languages on the linked Sites.
                Because Flutter and Dart are based on the community and packages / plugins
                developed by the comunity, not every code, that is used in my App
                is written by me.
                All the Packages can be found <a href="https://pub.dev">here</a>.
                Google check&rsquo;s the Packages, but i cannot garantee that these Packages are
                100% secure and bug-free.
                Although i will do my best to remove packages that aren&rsquo;t necessary, suspicious or
                not working.
                To see more information about the packages used in an individual App,
                please refer to the Github repository of this App, mostly linked in the Store or
                the App itself.
                If you do not find the link, you can <a href="https://github.com/Jules-sh?tab=repositories">search here</a>.
            </p>
            <h2 className={styles.heading}> Swift Specific </h2>
            <p>
                My Swift and SwiftUI Apps - most of my more recent Apps,
                are being build usind Apple&rsquo;s own native system language, which
                provides me access to system level functions and especially native functions.
                These Apps may store their Data encrypted and may sync it to your personal iCloud.
                These synced Data are not visible or accessible for anyone but yourself.
                To read more about storing and security, please refer to the projects own
                page, all Projects can be found <Link href="@/app/projects">here</Link>.
            </p>
        </main>
    )
}