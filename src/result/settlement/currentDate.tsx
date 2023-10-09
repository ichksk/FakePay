import { Text } from "react-native"

export const CurrentDate = () => {
    const date = new Date()
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString(); // 月は0から始まるため+1する
    const day = date.getDate().toString();
    const hour = date.getHours().toString();
    const minute = date.getMinutes().toString();
    const second = date.getSeconds().toString();

    const formattedDate = `${year}年${month}月${day}日 ${hour}時${minute}分${second}秒`;

    return (
        <Text
            style={{
                textAlign: "center",
                color: "#A9A9A9",
            }}
        >{formattedDate}</Text>
    )
}