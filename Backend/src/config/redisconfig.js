import { createClient } from "redis";


const redisclient = createClient({
    url : process.env.REDIS_URL
});

redisclient.on("connect", () => {
    console.log("Connected to Redis");
}
)

redisclient.on("error", (err) => {
    console.error("Redis Client Error", err);
})

await redisclient.connect();

export default redisclient;



