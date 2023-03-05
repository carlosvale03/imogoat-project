import { useState, useEffect } from 'react'

function Galery({ camImg }){
    const [imgSrc, setImgSrc] = useState("");
    
    useEffect(() => {
        const loadImage = async () => {
            const image = await import('../../../imgs' + camImg);
            setImgSrc(image.default);
            console.log(imgSrc)
        }
        loadImage();
    }, [camImg])

    return(
        <div>
            <img src={imgSrc} />
        </div>
    )
}

export default Galery