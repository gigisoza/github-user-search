import { useEffect, useState } from "react";

type propsData = {
    avatar_url: string,
    name: string,
    email: string,
    bio: string
}

export const FetchedData = () => {

    const [avatar, setAvatar] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');


    useEffect(() => {
        fetch("https://api.github.com/users/example")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setData(data)
            });
    }, []);

    const setData = (props: propsData) => {
        setAvatar(props.avatar_url);
        setName(props.name);
        setEmail(props.email);
        setBio(props.bio);
    };

    return (
        <div className="fetched-data">
            <div>
                <img src={avatar} alt="avatar" />
            </div>
        </div>
    );
}