import React, {useRef, useState} from 'react';

const OrderEditor = () => {

    const [order, setOrder] = useState({
        menu:"족발",
        address:"",
        request:"",
    });

    const addressInputRef = useRef();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOrder((prevOrder) => ({
            ...prevOrder,
            [name]: value
        }))
    };

    const onSubmit = () => {
        if (!order.address) {
            addressInputRef.current.focus();
            return;
        }

        alert(`주문이 완료되었습니다\n 메뉴: ${order.menu}\n주소: ${order.address}\n요청사항: ${order.request}`);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <h2>배달의민족 주문</h2>
            <div>
                <div style={{ marginBottom: 5, fontSize: 14 }}>메뉴 선택</div>
                <select
                    name="menu"
                    style={{ width: 300, padding: 5 }}
                    value={order.menu}
                    onChange={handleChange}
                >
                    <option value="족발">족발</option>
                    <option value="떡볶이">떡볶이</option>
                    <option value="아이스크림">아이스크림</option>
                    <option value="샐러드">샐러드</option>
                </select>
            </div>
            <div>
                <div style={{ marginBottom: 5, fontSize: 14 }}>배달 주소</div>
                <input
                    name="address"
                    ref={addressInputRef}
                    style={{ width: 300, padding: 5 }}
                    placeholder="주소) 서울특별시 xx동 .."
                    value={order.address}
                    onChange={handleChange}
                />
            </div>
            <div>
                <div style={{ marginBottom: 5, fontSize: 14 }}>배달 요청사항</div>
                <textarea
                    name="request"
                    style={{ width: 300, padding: 5 }}
                    placeholder="배달 요청사항을 써 주세요..."
                    value={order.request}
                    onChange={handleChange}
                />
            </div>
            <div>
                <button onClick={onSubmit} style={{ width: 300, padding: 5 }}>
                    주문 완료
                </button>
            </div>
        </div>
    );
};

export default OrderEditor;
