export default async function Ajax(props) {
    try {
        const { url, success } = props

        const res = await fetch(url)
        const data = await res.json()
        success(data)
    } catch (err) {
        console.log(err)
    }
}