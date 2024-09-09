import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Product = () => {
    const [productId, setProductId] = useState("");
    const navigate = useNavigate();

    const clickHandler = (e) => {
        setProductId(e.target.value);
        navigate(`/product/${productId}`);
    }

    useEffect(() => {
        navigate(`/product/${productId}`);
    }, [productId]);

    return (
        <div>
            <button onClick={clickHandler} value="p001">제품1</button>
            <button onClick={clickHandler} value="p002">제품2</button>
            <button onClick={clickHandler} value="p003">제품3</button>
            <button onClick={clickHandler} value="p004">제품4</button>
            <button onClick={clickHandler} value="p005">제품5</button>
            <button onClick={clickHandler} value="p006">제품6</button>
            <button onClick={clickHandler} value="p007">제품7</button>
            <button onClick={clickHandler} value="p008">제품8</button>
            <button onClick={clickHandler} value="p009">제품9</button>
        </div>
    );
};

export default Product;