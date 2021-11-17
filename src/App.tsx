import './App.css';
import { Badge, Card, Col, Progress, Row } from 'antd';
import Meta from 'antd/lib/card/Meta';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { env } from 'process';
import { createFromIconfontCN, HeartFilled, HeartOutlined, HeartTwoTone } from '@ant-design/icons';
import { C } from './model'
import AppConsts from "./services/app-consts";


const IconFont = createFromIconfontCN({
  scriptUrl: [
    '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js',
    '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js',
  ],
});

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    getData()
  }, [])

  function getData() {
    axios.get(AppConsts.baseUrl).then((response) => {
      setData(response.data.data)
    });
  }

  return (
    <div className="App">
      <div className="content" style={{ background: "whitesmoke" }} >
        <div className="grid" style={{ background: "white" }}>

          <Badge.Ribbon text="AED 50.00" placement='start' color="Purple" >
            <Progress style={{ marginTop: -50 }} type="circle" percent={70} strokeLinecap='square' format={percent => `${percent} SOLD OUT OF 100 `} strokeColor="Purple" />
            {data.map((item: C) =>
              <Row className="row" gutter={100}>

                <Col flex="1 0 auto" className="column" span={100}  >
                  <Card size="small" color="Purple"
                    bordered={false}
                    hoverable style={{ width: 300 }}
                    cover={<img width={200} height={200} alt="example" src={item.product_id.image} />}
                  >
                    <Meta title={item.product_id.name} description={item.product_id.description} />
                  </Card>
                </Col>
                <Col flex="1 0 auto" className="column" span={400}  >
                  <Card size="small"
                    bordered={false}
                    hoverable style={{ width: 300 }}
                    cover={<img width={200} height={200} alt="example" src={item.prize_id.image} />}
                  >
                    <Meta title={item.prize_id.name} description={item.prize_id.description} />
                  </Card>

                </Col>
                <div className="icon">
                  <HeartTwoTone />

                  <IconFont type="icon-shoppingcart" />
                </div>
              </Row>
            )}
          </Badge.Ribbon>

        </div>
      </div>
    </div>

  );
}

export default App;
