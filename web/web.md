`网络相关的函数`


1.parseURL:  用于解析url [测试连接](https://codepen.io/DrivingFatigue/pen/KJWvgm)

```javascript
eg: url = 'http://c.sit.lattebank.com/latteweb/coupons?p_o=i&p_t=hyKM5yK9W2V2kknFFXOT7bBtIhEwgWSkGIjmDZAM7fkMoAzNNZXbe_JsMrqgIpZxrnQsBafESi0&p_s=2325f3be-d25d-4550-b947-0bf4fe265e72&p_u=96de0d10-900e-4450-a4b2-fb774308e422&s_w=640&sessionId=2325f3be-d25d-4550-b947-0bf4fe265e72&pageId=coupons&previousViewId=966C70D9-D070-476D-94E9-63DFFAEE2229&token=hyKM5yK9W2V2kknFFXOT7bBtIhEwgWSkGIjmDZAM7fkMoAzNNZXbe_JsMrqgIpZxrnQsBafESi0&previousPageId=tabP&uid=96de0d10-900e-4450-a4b2-fb774308e422&viewId=4199DDBB-9587-4215-84A0-A3A68CD54D99&p_c=4108C0CA-B08B-470C-8CBE-CD95FACEEE7B&r_c=hb&r_e=hb&cjjId=4108C0CA-B08B-470C-8CBE-CD95FACEEE7B&correlationId=69285A12-3FA3-4F68-BF67-F6CA3AFBCA16&p_i=10314&s_h=1136&r_i=FEB76DCB-EB91-4703-9261-893C406FD1BA.M&t_pp=/hbcoupon/coupons'

const params = parseURL(url);

/*
 params:
{
    cjjId: '4108C0CA-B08B-470C-8CBE-CD95FACEEE7B',
    correlationId: '69285A12-3FA3-4F68-BF67-F6CA3AFBCA16',
    p_c: '4108C0CA-B08B-470C-8CBE-CD95FACEEE7B',
    p_i: '10314',
    p_o: 'i',
    p_s: '2325f3be-d25d-4550-b947-0bf4fe265e72',
    p_t: 'hyKM5yK9W2V2kknFFXOT7bBtIhEwgWSkGIjmDZAM7fkMoAzNNZXbe_JsMrqgIpZxrnQsBafESi0',
    p_u: '96de0d10-900e-4450-a4b2-fb774308e422',
    pageId: 'coupons',
    previousPageId: 'tabP',
    previousViewId: '966C70D9-D070-476D-94E9-63DFFAEE2229',
    r_c: 'hb',
    r_e: 'hb',
    r_i: 'FEB76DCB-EB91-4703-9261-893C406FD1BA.M',
    s_h: '1136',
    s_w: '640',
    sessionId: '2325f3be-d25d-4550-b947-0bf4fe265e72',
    t_pp: '/hbcoupon/coupons',
    token: 'hyKM5yK9W2V2kknFFXOT7bBtIhEwgWSkGIjmDZAM7fkMoAzNNZXbe_JsMrqgIpZxrnQsBafESi0',
    uid: '96de0d10-900e-4450-a4b2-fb774308e422',
    viewId: '4199DDBB-9587-4215-84A0-A3A68CD54D99',
}
*/

```
