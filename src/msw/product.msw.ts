import { HttpResponse, http } from 'msw'
import { config } from '../constants/config'

const productsRes = {
  message: 'Lấy các sản phẩm thành công',
  data: {
    products: [
      {
        _id: '60afb2c76ef5b902180aacba',
        images: [
          'https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg',
          'https://api-ecom.duthanhduoc.com/images/6c4f6bde-6242-40fd-be52-d06033636e04.jpg',
          'https://api-ecom.duthanhduoc.com/images/1385ed69-6843-4edb-a1fb-e5fc795a99e5.jpg',
          'https://api-ecom.duthanhduoc.com/images/7f4f7a5b-b003-462a-a6b9-c0e69175def3.jpg',
          'https://api-ecom.duthanhduoc.com/images/1c323bdd-c0ef-4538-b09d-34c1a4478baa.jpg',
          'https://api-ecom.duthanhduoc.com/images/5054f46f-d317-40f6-a804-6b22dc92e946.jpg',
          'https://api-ecom.duthanhduoc.com/images/eed30991-df2d-41b5-afb2-697a06ba3299.jpg',
          'https://api-ecom.duthanhduoc.com/images/2922fee1-448c-4302-bcc2-804e0fe44f84.jpg',
          'https://api-ecom.duthanhduoc.com/images/84f7bf91-685c-4be9-bd8c-1f0a4e2e21c3.jpg'
        ],
        price: 3190000,
        rating: 4.6,
        price_before_discount: 3990000,
        quantity: 138,
        sold: 1200,
        view: 100823,
        name: 'Điện Thoại Vsmart Active 3 6GB/64GB - Hàng Chính Hãng',
        category: {
          _id: '60afafe76ef5b902180aacb5',
          name: 'Điện thoại',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/bbea6d3e-e5b1-494f-ab16-02eece816d50.jpg',
        createdAt: '2021-05-27T14:55:03.113Z',
        updatedAt: '2024-05-11T00:02:26.666Z'
      },
      {
        _id: '60afb2426ef5b902180aacb9',
        images: [
          'https://api-ecom.duthanhduoc.com/images/aa374023-7a5b-46ea-aca3-dad1b29fb015.jpg',
          'https://api-ecom.duthanhduoc.com/images/b997dac2-2674-4e20-b5ee-459566b077e7.jpg',
          'https://api-ecom.duthanhduoc.com/images/ac328d77-6014-4a2d-8626-924ac35876df.jpg',
          'https://api-ecom.duthanhduoc.com/images/5061fefa-bded-4fb0-80e5-3623656a4816.jpg',
          'https://api-ecom.duthanhduoc.com/images/02c08a86-4d9b-437b-ae02-f1d49cf2933b.jpg',
          'https://api-ecom.duthanhduoc.com/images/12c405e3-b24f-46ef-8969-54050e1022e9.jpg',
          'https://api-ecom.duthanhduoc.com/images/d448057c-3d3d-45d2-a9bc-e984bc80555f.jpg'
        ],
        price: 2590000,
        rating: 4.2,
        price_before_discount: 3490000,
        quantity: 73,
        sold: 6800,
        view: 40324,
        name: 'Điện thoại OPPO A12 (3GB/32GB) - Hàng chính hãng',
        category: {
          _id: '60afafe76ef5b902180aacb5',
          name: 'Điện thoại',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/aa374023-7a5b-46ea-aca3-dad1b29fb015.jpg',
        createdAt: '2021-05-27T14:52:50.392Z',
        updatedAt: '2024-05-10T17:24:28.322Z'
      },
      {
        _id: '60afb1c56ef5b902180aacb8',
        images: [
          'https://api-ecom.duthanhduoc.com/images/a7fb7a18-743a-42bb-bead-36370c1d1aba.jpg',
          'https://api-ecom.duthanhduoc.com/images/b09ff60d-c6bd-4d3a-b778-0fc2708a65fb.jpg',
          'https://api-ecom.duthanhduoc.com/images/fc5ecd4c-47eb-4f12-ae82-ef26fd492887.jpg',
          'https://api-ecom.duthanhduoc.com/images/a87f854d-37a9-4252-a2f7-243fc21f8b55.jpg',
          'https://api-ecom.duthanhduoc.com/images/3ecf878d-6742-43d4-abe7-044c15c84120.jpg'
        ],
        price: 20990000,
        rating: 5,
        price_before_discount: 26990000,
        quantity: 17,
        sold: 482,
        view: 24422,
        name: 'Điện thoại Apple Iphone 12 64GB - Hàng chính hãng VNA',
        category: {
          _id: '60afafe76ef5b902180aacb5',
          name: 'Điện thoại',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/a7fb7a18-743a-42bb-bead-36370c1d1aba.jpg',
        createdAt: '2021-05-27T14:50:45.708Z',
        updatedAt: '2024-05-10T17:30:05.131Z'
      },
      {
        _id: '60afb14d6ef5b902180aacb7',
        images: [
          'https://api-ecom.duthanhduoc.com/images/51ef469d-0eb5-48fb-958d-ce2b9c664adc.jpg',
          'https://api-ecom.duthanhduoc.com/images/32d2b004-6a6c-4605-af12-8f8f2e4f6aff.jpg',
          'https://api-ecom.duthanhduoc.com/images/00f74b87-0750-4cc9-9b91-24907a2b1721.jpg',
          'https://api-ecom.duthanhduoc.com/images/f08f305b-e237-444d-9f1e-430ce15acd96.jpg',
          'https://api-ecom.duthanhduoc.com/images/2442b133-7801-47a5-ae7d-5fc5196a1a51.jpg',
          'https://api-ecom.duthanhduoc.com/images/19a98c2f-3ab4-4d72-bbc9-3525fd89859c.jpg',
          'https://api-ecom.duthanhduoc.com/images/9123a99f-e71c-49e7-a87b-974541fcb607.jpg'
        ],
        price: 2130000,
        rating: 5,
        price_before_discount: 2690000,
        quantity: 269,
        sold: 5600,
        view: 9653,
        name: 'Điện Thoại Realme C11 (2GB/32GB) - Hàng Chính Hãng',
        category: {
          _id: '60afafe76ef5b902180aacb5',
          name: 'Điện thoại',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/51ef469d-0eb5-48fb-958d-ce2b9c664adc.jpg',
        createdAt: '2021-05-27T14:48:45.577Z',
        updatedAt: '2024-05-10T15:17:21.127Z'
      },
      {
        _id: '60afb07e6ef5b902180aacb6',
        images: [
          'https://api-ecom.duthanhduoc.com/images/4e9c8364-7604-4b61-8658-9f18655bae40.jpg',
          'https://api-ecom.duthanhduoc.com/images/794c2b24-922a-4cc2-8c24-87551af917df.jpg',
          'https://api-ecom.duthanhduoc.com/images/e5ae5753-c153-4a29-9254-48cde48f814f.jpg',
          'https://api-ecom.duthanhduoc.com/images/24ceb22a-d9a2-4936-a53d-1d8c508b5eeb.jpg',
          'https://api-ecom.duthanhduoc.com/images/db1900e0-245c-437f-9e7e-9a5f15045d0f.jpg',
          'https://api-ecom.duthanhduoc.com/images/d4be2e97-e131-4cc6-93ed-432593ba9245.jpg',
          'https://api-ecom.duthanhduoc.com/images/1866d116-06a0-4657-936e-256c8ed09bd0.jpg',
          'https://api-ecom.duthanhduoc.com/images/77c6c7ec-25dc-4d5e-b572-22e7916c1cb2.jpg',
          'https://api-ecom.duthanhduoc.com/images/6492ca72-6451-414c-8653-f31693ebe1e6.jpg'
        ],
        price: 1949000,
        rating: 5,
        price_before_discount: 1990000,
        quantity: 409,
        sold: 1000,
        view: 7768,
        name: 'Điện Thoại Xiaomi Redmi 9A 2GB/32GB - Hàng Chính Hãng',
        category: {
          _id: '60afafe76ef5b902180aacb5',
          name: 'Điện thoại',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/4e9c8364-7604-4b61-8658-9f18655bae40.jpg',
        createdAt: '2021-05-27T14:45:18.517Z',
        updatedAt: '2024-05-10T17:00:31.496Z'
      },
      {
        _id: '60afafb76ef5b902180aacb4',
        images: [
          'https://api-ecom.duthanhduoc.com/images/1881b221-e9df-4b91-8d13-9d46c995a5d6.jpg',
          'https://api-ecom.duthanhduoc.com/images/806160a8-f96b-4bfd-bfa5-a821016e5b30.jpg',
          'https://api-ecom.duthanhduoc.com/images/07d99599-bf3e-4b23-baa3-72b81669f5a7.jpg',
          'https://api-ecom.duthanhduoc.com/images/06125fad-e4a5-4a1c-9179-cab3eec4d237.jpg',
          'https://api-ecom.duthanhduoc.com/images/f9a7461e-7d3c-4f21-8a0e-4bb630d543bc.jpg',
          'https://api-ecom.duthanhduoc.com/images/bb01fb3b-a5a6-4a0c-a2cd-97655f074203.jpg',
          'https://api-ecom.duthanhduoc.com/images/21f5ece2-7e35-4d77-832f-e3546848979f.jpg',
          'https://api-ecom.duthanhduoc.com/images/efc35076-3bb6-4527-bdb2-b273db3012bd.jpg'
        ],
        price: 244550,
        rating: 3.8,
        price_before_discount: 489000,
        quantity: 9920,
        sold: 728,
        view: 12754,
        name: 'Đồng Hồ Nam WWOOR 8826 Máy Nhật Dây Thép Mành Cao Cấp - Nhiều Màu',
        category: {
          _id: '60afacca6ef5b902180aacaf',
          name: 'Đồng hồ',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/1881b221-e9df-4b91-8d13-9d46c995a5d6.jpg',
        createdAt: '2021-05-27T14:41:59.307Z',
        updatedAt: '2024-05-10T17:31:22.893Z'
      },
      {
        _id: '60afaf286ef5b902180aacb3',
        images: [
          'https://api-ecom.duthanhduoc.com/images/ffa092a6-c35e-4de3-b955-99f368f57546.jpg',
          'https://api-ecom.duthanhduoc.com/images/c8a8c12e-aef6-436b-b114-4db528ca3542.jpg',
          'https://api-ecom.duthanhduoc.com/images/0d3a7e41-f0b8-47aa-843b-db994f661682.jpg',
          'https://api-ecom.duthanhduoc.com/images/517e6837-beb7-4c8a-8df0-259f267828dd.jpg',
          'https://api-ecom.duthanhduoc.com/images/ea3c7cdf-71c5-4e0b-9a0e-1305737b5aee.jpg',
          'https://api-ecom.duthanhduoc.com/images/264418f7-f239-4405-82bf-b2e0ec05891d.jpg',
          'https://api-ecom.duthanhduoc.com/images/fd5c8918-ef84-4bf8-b20f-bb514e415686.jpg',
          'https://api-ecom.duthanhduoc.com/images/f6cb802c-9a43-4804-9a30-e56be8e41a19.jpg',
          'https://api-ecom.duthanhduoc.com/images/133ec1a8-fe1f-4ffe-a7a9-28880de79838.jpg'
        ],
        price: 300000,
        rating: 5,
        price_before_discount: 450000,
        quantity: 4034,
        sold: 2400,
        view: 6948,
        name: 'Đồng Hồ Nam CRRJU CR8940 Dây Thép Cao Cấp',
        category: {
          _id: '60afacca6ef5b902180aacaf',
          name: 'Đồng hồ',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/ffa092a6-c35e-4de3-b955-99f368f57546.jpg',
        createdAt: '2021-05-27T14:39:36.099Z',
        updatedAt: '2024-05-10T12:30:40.792Z'
      },
      {
        _id: '60afae906ef5b902180aacb2',
        images: [
          'https://api-ecom.duthanhduoc.com/images/37256021-1e7c-40f4-8e0f-d665f7cb95bd.jpg',
          'https://api-ecom.duthanhduoc.com/images/cae19f00-7a2a-4d79-9446-2868a613b4b7.jpg',
          'https://api-ecom.duthanhduoc.com/images/314ab003-20e1-455f-a585-7514a388a9ae.jpg',
          'https://api-ecom.duthanhduoc.com/images/eba3ed37-74f2-460e-84be-c651907b2536.jpg',
          'https://api-ecom.duthanhduoc.com/images/f0255207-359f-44a9-8b06-aea6d80408cd.jpg',
          'https://api-ecom.duthanhduoc.com/images/1939becb-3b6f-4798-b67d-66e9997efee8.jpg',
          'https://api-ecom.duthanhduoc.com/images/5990d6b5-894b-4c9c-81a2-3f039dd7b867.jpg',
          'https://api-ecom.duthanhduoc.com/images/3b5f3f84-6ff0-454f-bafb-883fce1cc3f9.jpg',
          'https://api-ecom.duthanhduoc.com/images/e97515b5-d474-40c9-b984-28d6b3ffbd08.jpg'
        ],
        price: 199000,
        rating: 5,
        price_before_discount: 250000,
        quantity: 3091,
        sold: 2500,
        view: 6863,
        name: 'Đồng Hồ Nam FNGEEN Dây Thép Cao Cấp Không Gỉ, Có Lịch Ngày, Phong Cách Doanh Nhân Sang Trọng',
        category: {
          _id: '60afacca6ef5b902180aacaf',
          name: 'Đồng hồ',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/37256021-1e7c-40f4-8e0f-d665f7cb95bd.jpg',
        createdAt: '2021-05-27T14:37:04.282Z',
        updatedAt: '2024-05-10T17:31:32.183Z'
      },
      {
        _id: '60afadff6ef5b902180aacb1',
        images: [
          'https://api-ecom.duthanhduoc.com/images/a7dfed1e-6beb-4390-af5e-24413bf619a6.jpg',
          'https://api-ecom.duthanhduoc.com/images/29fe140f-3280-4724-a246-ede984d75559.jpg',
          'https://api-ecom.duthanhduoc.com/images/c500e2d3-85ab-4cbb-b3b0-bd4b622a2cb2.jpg',
          'https://api-ecom.duthanhduoc.com/images/70ac3d12-9f6a-4447-8283-58fd9d63e319.jpg',
          'https://api-ecom.duthanhduoc.com/images/e00804e6-6884-47ca-acb0-0bd9a246266a.jpg',
          'https://api-ecom.duthanhduoc.com/images/534cff9b-d05f-40b2-a777-f043d382fd38.jpg',
          'https://api-ecom.duthanhduoc.com/images/4cce1f66-8393-4f82-b3f0-5e81face5346.jpg',
          'https://api-ecom.duthanhduoc.com/images/07c573b3-67f3-4c59-9ad8-441cb803a9ec.jpg',
          'https://api-ecom.duthanhduoc.com/images/33d2727b-68ed-4454-a1fb-4c66d454dbf7.jpg'
        ],
        price: 260000,
        rating: 5,
        price_before_discount: 500000,
        quantity: 4050,
        sold: 2300,
        view: 3869,
        name: 'Đồng Hồ Điện Tử Thể Thao Nam Chính Hãng SMAEL JAPAN 2020 - Phong Cách Quân Đội',
        category: {
          _id: '60afacca6ef5b902180aacaf',
          name: 'Đồng hồ',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/a7dfed1e-6beb-4390-af5e-24413bf619a6.jpg',
        createdAt: '2021-05-27T14:34:39.366Z',
        updatedAt: '2024-05-10T15:46:23.022Z'
      },
      {
        _id: '60afad846ef5b902180aacb0',
        images: [
          'https://api-ecom.duthanhduoc.com/images/a04c55a2-9569-4a59-a6de-2b3bbdcb570a.jpg',
          'https://api-ecom.duthanhduoc.com/images/7d131757-51eb-43af-bc2a-4eb479186fc9.jpg',
          'https://api-ecom.duthanhduoc.com/images/89ca357b-cd4a-4389-b290-166bb78a987b.jpg',
          'https://api-ecom.duthanhduoc.com/images/869051b5-ce64-4107-82d1-891daa969700.jpg',
          'https://api-ecom.duthanhduoc.com/images/7586bd50-7d86-4fd9-b728-812753fdbe8d.jpg',
          'https://api-ecom.duthanhduoc.com/images/aaf5a147-d8f9-44dd-914c-ba52298fd354.jpg',
          'https://api-ecom.duthanhduoc.com/images/df1c6c76-3658-4657-a678-ca53197cef7e.jpg',
          'https://api-ecom.duthanhduoc.com/images/b117fb99-cc14-4090-9e12-1f269485b80d.jpg',
          'https://api-ecom.duthanhduoc.com/images/cb4f7da2-267f-4dc7-bd6e-aab30e04067a.jpg'
        ],
        price: 229000,
        rating: 5,
        price_before_discount: 399000,
        quantity: 100123,
        sold: 31500,
        view: 9672,
        name: 'Đồng Hồ Nam WWOOR 8018 Dây Thép Nhật Cao Cấp Nhiều Màu',
        category: {
          _id: '60afacca6ef5b902180aacaf',
          name: 'Đồng hồ',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/a04c55a2-9569-4a59-a6de-2b3bbdcb570a.jpg',
        createdAt: '2021-05-27T14:32:36.605Z',
        updatedAt: '2024-05-10T07:47:05.662Z'
      },
      {
        _id: '60af722af1a3041b289d8ba1',
        images: [
          'https://api-ecom.duthanhduoc.com/images/8fdcc6d3-70ea-4853-954e-b8776fbab6fa.jpg',
          'https://api-ecom.duthanhduoc.com/images/531834bf-0bc0-4cdc-941e-9b5204d97b0d.jpg',
          'https://api-ecom.duthanhduoc.com/images/4cec69e1-0cc8-4c2c-8f2e-19340cc89469.jpg',
          'https://api-ecom.duthanhduoc.com/images/fb0cb1b5-8987-4d0b-bf40-428e91cb417c.jpg',
          'https://api-ecom.duthanhduoc.com/images/21643c6a-8e9f-46c7-a587-f7c5aa5034c9.jpg',
          'https://api-ecom.duthanhduoc.com/images/735f43ba-992c-4ace-a3fe-e097da0c8877.jpg',
          'https://api-ecom.duthanhduoc.com/images/e3371592-f52a-43f4-82dc-bc8da71a023b.jpg',
          'https://api-ecom.duthanhduoc.com/images/344baaa7-6507-4a1c-a619-9e199638cbff.jpg',
          'https://api-ecom.duthanhduoc.com/images/37b8be77-cb17-4126-8dae-97ff7bb19014.jpg'
        ],
        price: 194555,
        rating: 4.1,
        price_before_discount: 299999,
        quantity: 75,
        sold: 55,
        view: 6201,
        name: '[KHUYẾN MÃI 35%] Áo Thun POLO Nam, Tay Ngắn Áo Cổ Sọc, Chất Liệu Cá Sấu Cao Cấp - Nhiều màu- Đủ Size',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/8fdcc6d3-70ea-4853-954e-b8776fbab6fa.jpg',
        createdAt: '2021-05-27T10:19:22.177Z',
        updatedAt: '2024-05-10T15:10:24.402Z'
      },
      {
        _id: '60af70fbf1a3041b289d8ba0',
        images: [
          'https://api-ecom.duthanhduoc.com/images/93ac7b62-52e9-4846-9d51-9bc227a96923.jpg',
          'https://api-ecom.duthanhduoc.com/images/555c5f7a-493e-4419-b586-d0a1cb0b6b75.jpg',
          'https://api-ecom.duthanhduoc.com/images/14fca8bf-2c24-4ebb-9ade-e11fd43f0ea3.jpg',
          'https://api-ecom.duthanhduoc.com/images/c43fc98d-ee1e-4b1a-af06-6b9b2771bb7e.jpg',
          'https://api-ecom.duthanhduoc.com/images/6b484bfb-c64f-4bfa-aa77-617a1f7fafa1.jpg',
          'https://api-ecom.duthanhduoc.com/images/0e34d957-2f67-40ef-b504-8bbfdece70b2.jpg',
          'https://api-ecom.duthanhduoc.com/images/dcc1a2d2-1c9a-49ad-86b6-c0f43c033060.jpg',
          'https://api-ecom.duthanhduoc.com/images/d7b6c670-b54f-4cfc-af9e-f2d7f18b821c.jpg',
          'https://api-ecom.duthanhduoc.com/images/7105a40d-4773-44cd-9a2a-f07fba0c6889.jpg'
        ],
        price: 169000,
        rating: 4.5,
        price_before_discount: 279000,
        quantity: 2988,
        sold: 456,
        view: 4328,
        name: 'Áo Thun Polo Kẻ Ngang Trẻ Trung Sành Điệu Áo Phông Nam Có Cổ Tay Cộc Vải 100% Cotton Mềm Mịn Thoáng Mát HK016',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/93ac7b62-52e9-4846-9d51-9bc227a96923.jpg',
        createdAt: '2021-05-27T10:14:19.185Z',
        updatedAt: '2024-05-10T16:15:16.718Z'
      },
      {
        _id: '60af6f7bf1a3041b289d8b9c',
        images: [
          'https://api-ecom.duthanhduoc.com/images/edbdcca1-7a53-47fe-b3b5-4f356992eb36.jpg',
          'https://api-ecom.duthanhduoc.com/images/6d0eac12-c3c2-40e9-b72c-27b3c4b40482.jpg',
          'https://api-ecom.duthanhduoc.com/images/3ffc6422-e0df-46c4-96f2-0c35928be981.jpg',
          'https://api-ecom.duthanhduoc.com/images/14258b71-44a4-4ee9-a2ff-cc260123660c.jpg',
          'https://api-ecom.duthanhduoc.com/images/e82ef1bc-ba16-44f9-938d-edb415e09eee.jpg',
          'https://api-ecom.duthanhduoc.com/images/9e15917b-8b10-483b-9c83-88fc8de6e554.jpg',
          'https://api-ecom.duthanhduoc.com/images/ffc043dd-60ba-48b8-ba4b-d1e8c3f5371c.jpg',
          'https://api-ecom.duthanhduoc.com/images/13cff076-860d-4e98-ad03-049eaf636930.jpg',
          'https://api-ecom.duthanhduoc.com/images/8767ce97-f0de-4f49-9c05-7571dca74edd.jpg'
        ],
        price: 399000,
        rating: 4.2,
        price_before_discount: 500000,
        quantity: 552,
        sold: 11,
        view: 4041,
        name: 'Áo Polo nam HEBOZ vải cotton pha co giãn 4 chiều đẹp in logo cao bên ngực trái cao cấp, form slimfit basic - 00000673',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/edbdcca1-7a53-47fe-b3b5-4f356992eb36.jpg',
        createdAt: '2021-05-27T10:07:55.092Z',
        updatedAt: '2024-05-10T07:54:39.709Z'
      },
      {
        _id: '60af6f12f1a3041b289d8b9b',
        images: [
          'https://api-ecom.duthanhduoc.com/images/b18506cc-3d5f-4160-aee3-8e4242ed5717.jpg',
          'https://api-ecom.duthanhduoc.com/images/0e91ba6d-8e35-4fee-8812-6f81bbe0e3de.jpg',
          'https://api-ecom.duthanhduoc.com/images/519d5750-23b3-4ba1-8fb6-e74bf594c558.jpg',
          'https://api-ecom.duthanhduoc.com/images/3640d703-9add-45b7-b726-767c13cf3238.jpg',
          'https://api-ecom.duthanhduoc.com/images/46b7bebc-6a8d-4fb3-aa63-e9cf550f6490.jpg',
          'https://api-ecom.duthanhduoc.com/images/30273cc8-98fb-4cc6-85e6-02c447e45f4a.jpg'
        ],
        price: 75000,
        rating: 5,
        price_before_discount: 150000,
        quantity: 52,
        sold: 5,
        view: 3220,
        name: 'Áo thun Polo nam cổ bẻ BASIC vải cá sấu Cotton xuất xịn, chuẩn đẹp, màu HỒNG',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/b18506cc-3d5f-4160-aee3-8e4242ed5717.jpg',
        createdAt: '2021-05-27T10:06:10.339Z',
        updatedAt: '2024-05-10T17:31:52.828Z'
      },
      {
        _id: '60ad06ba2fb52902585972b0',
        images: [
          'https://api-ecom.duthanhduoc.com/images/fc830d4a-c616-4928-9b30-ff7cca7fa4d4.jpg',
          'https://api-ecom.duthanhduoc.com/images/c1ede578-0057-4ddc-9d35-9204787f4c8b.jpg',
          'https://api-ecom.duthanhduoc.com/images/118f336b-e59f-459e-ac95-c8db472c5d2b.jpg',
          'https://api-ecom.duthanhduoc.com/images/3aa27e77-8a1e-403a-98bb-7d859f6983cc.jpg',
          'https://api-ecom.duthanhduoc.com/images/a645aea7-e620-4bac-8ee1-09c983222644.jpg',
          'https://api-ecom.duthanhduoc.com/images/971fe2bf-79c5-4fe5-8b8a-abaaa835cfc0.jpg',
          'https://api-ecom.duthanhduoc.com/images/e528251b-9235-4009-b5e3-d870f3072364.jpg',
          'https://api-ecom.duthanhduoc.com/images/231e1ab4-2f14-428a-970c-7da321f01519.jpg',
          'https://api-ecom.duthanhduoc.com/images/24cabe00-da6d-4070-a1ae-5280b00b45e7.jpg'
        ],
        price: 69000,
        rating: 4.958,
        price_before_discount: 139000,
        quantity: 17659,
        sold: 497,
        view: 2312,
        name: '[Mã FAMAYMA2 giảm 10K đơn 50K] Áo Thun ngắn tay unisex Tie Dye, form oversize, vải cotton loang mầu 2SClothing.',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/fc830d4a-c616-4928-9b30-ff7cca7fa4d4.jpg',
        createdAt: '2021-05-25T14:16:26.462Z',
        updatedAt: '2024-05-10T12:54:49.689Z'
      },
      {
        _id: '60ad061d2fb52902585972af',
        images: [
          'https://api-ecom.duthanhduoc.com/images/ee1f61e3-2029-43fd-a66d-d746c8fd637c.jpg',
          'https://api-ecom.duthanhduoc.com/images/8437f3b8-46b7-49b6-a362-0f58691d9ba9.jpg',
          'https://api-ecom.duthanhduoc.com/images/5cb7c7b1-26c2-4c27-8296-b7d945d823dc.jpg',
          'https://api-ecom.duthanhduoc.com/images/03765370-897a-4f89-9f52-3e595fd1401a.jpg',
          'https://api-ecom.duthanhduoc.com/images/6b75401d-ab0d-4b78-a8ea-e2478e54628f.jpg',
          'https://api-ecom.duthanhduoc.com/images/5b78806c-32ca-4ed2-9736-271c28452892.jpg',
          'https://api-ecom.duthanhduoc.com/images/5a38e7b5-9fc8-4bf2-a534-dc65f54083d9.jpg',
          'https://api-ecom.duthanhduoc.com/images/ac2b1da2-4067-4a7f-9509-3cfc399811fc.jpg',
          'https://api-ecom.duthanhduoc.com/images/3a5a1850-4f0f-4c1b-b920-30b6017e2c94.jpg'
        ],
        price: 69000,
        rating: 4.9,
        price_before_discount: 138000,
        quantity: 107962,
        sold: 5655,
        view: 14972,
        name: '[Mã FADI5K245 giảm 5K đơn 0đ] Áo thun tay lỡ Gấu194 unisex form rộng trơn chữ vải coton mềm mịn co dãn 4 chiều - GAU1994',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/ee1f61e3-2029-43fd-a66d-d746c8fd637c.jpg',
        createdAt: '2021-05-25T14:13:49.042Z',
        updatedAt: '2024-05-10T23:17:22.767Z'
      },
      {
        _id: '60ad056c2fb52902585972ae',
        images: [
          'https://api-ecom.duthanhduoc.com/images/e647d83e-4d1b-4297-b1cb-2b87bdad7963.jpg',
          'https://api-ecom.duthanhduoc.com/images/f83deef7-4be7-4d7d-91f0-d4dbc2178a88.jpg',
          'https://api-ecom.duthanhduoc.com/images/b7e42549-d22c-4817-907b-405414b2908f.jpg',
          'https://api-ecom.duthanhduoc.com/images/dd0f9992-be2c-40cf-9019-016b4c04d631.jpg',
          'https://api-ecom.duthanhduoc.com/images/cd9a52b3-d01b-4913-a95c-0dadc36e0bee.jpg',
          'https://api-ecom.duthanhduoc.com/images/7559c5c8-9b55-496d-a0b7-6daa9c46cebc.jpg',
          'https://api-ecom.duthanhduoc.com/images/6337ee32-b050-4a04-a5b3-2f378b4b260a.jpg',
          'https://api-ecom.duthanhduoc.com/images/0ce61658-dd39-4dca-9376-c4e3f1f19cb6.jpg',
          'https://api-ecom.duthanhduoc.com/images/5b85ee62-17ec-4726-bc32-dc860415254c.jpg'
        ],
        price: 130000,
        rating: 0,
        price_before_discount: 150000,
        quantity: 6982,
        sold: 0,
        view: 1372,
        name: 'Áo Thun Tay Lỡ Form Rộng Mon Mon Siêu Hot🍁 Unisex nam nữ đều mặc được)',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/e647d83e-4d1b-4297-b1cb-2b87bdad7963.jpg',
        createdAt: '2021-05-25T14:10:52.503Z',
        updatedAt: '2024-05-10T08:26:11.186Z'
      },
      {
        _id: '60ad04e32fb52902585972ad',
        images: [
          'https://api-ecom.duthanhduoc.com/images/a1c873c9-a1e3-477e-8a09-e9bd6e43b1cf.jpg',
          'https://api-ecom.duthanhduoc.com/images/a55c3d25-d976-4a13-9cb8-853d86ab5973.jpg',
          'https://api-ecom.duthanhduoc.com/images/f45a3ea7-96f8-46f4-852d-2b649e0e9683.jpg',
          'https://api-ecom.duthanhduoc.com/images/1ade3e4a-521d-479a-839b-9f376367a2e9.jpg',
          'https://api-ecom.duthanhduoc.com/images/40ac6bc7-c9dd-46f2-9abe-67ea984f1bf6.jpg',
          'https://api-ecom.duthanhduoc.com/images/f6bdd55e-954e-411e-b084-5addcb3bda16.jpg',
          'https://api-ecom.duthanhduoc.com/images/242b0379-269e-4f4f-a2da-3b1a3b6d52b8.jpg',
          'https://api-ecom.duthanhduoc.com/images/f56a0dfa-81de-49e5-b997-92c35627358d.jpg'
        ],
        price: 37000,
        rating: 4.95,
        price_before_discount: 70000,
        quantity: 724,
        sold: 75,
        view: 1378,
        name: 'Áo Cotton Nam Đông Xuân Cộc Tay Và Ba Lỗ ( Video+ Ảnh Thật )',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/a1c873c9-a1e3-477e-8a09-e9bd6e43b1cf.jpg',
        createdAt: '2021-05-25T14:08:35.273Z',
        updatedAt: '2024-05-10T07:46:46.221Z'
      },
      {
        _id: '60ad04392fb52902585972ac',
        images: [
          'https://api-ecom.duthanhduoc.com/images/ef8fcfa8-c006-486e-9660-462efa93ad43.jpg',
          'https://api-ecom.duthanhduoc.com/images/5d172cad-1bcf-4d9d-99d1-0181e3aafdae.jpg',
          'https://api-ecom.duthanhduoc.com/images/f6ad0955-51bd-444b-bd74-b5bb4166ccfb.jpg',
          'https://api-ecom.duthanhduoc.com/images/9064e6d7-1315-4109-bbfa-6003f3a7227b.jpg',
          'https://api-ecom.duthanhduoc.com/images/789df15f-0298-4083-a559-7f567abb9adc.jpg',
          'https://api-ecom.duthanhduoc.com/images/1204c73a-151c-4b31-9e4e-bcee60db0b68.jpg'
        ],
        price: 79000,
        rating: 4.8,
        price_before_discount: 150000,
        quantity: 23210,
        sold: 898,
        view: 2403,
        name: '[XẢ KHO GIÁ SỐC] Áo thun nam cổ tim ngắn tay đẹp nhiều màu đủ size ( có size lớn cho người 100 kg )',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/ef8fcfa8-c006-486e-9660-462efa93ad43.jpg',
        createdAt: '2021-05-25T14:05:45.785Z',
        updatedAt: '2024-05-09T10:44:16.511Z'
      },
      {
        _id: '60ad03872fb52902585972ab',
        images: [
          'https://api-ecom.duthanhduoc.com/images/d2fe4691-1d73-4bb2-8aec-afff5f13e83d.jpg',
          'https://api-ecom.duthanhduoc.com/images/09e9a588-c37f-4f8c-8e71-526740463197.jpg',
          'https://api-ecom.duthanhduoc.com/images/d0008f1d-6b5b-41c2-9f10-fbafe8d77654.jpg',
          'https://api-ecom.duthanhduoc.com/images/9fc757bd-72d0-4eb4-bb9f-1b4c24cdd0f5.jpg',
          'https://api-ecom.duthanhduoc.com/images/9ff8b241-df66-4d1d-af33-f13bebcaf533.jpg',
          'https://api-ecom.duthanhduoc.com/images/c7f0f858-537e-49f6-9d91-2f29bb97ac2b.jpg',
          'https://api-ecom.duthanhduoc.com/images/59f5a601-5dde-41dc-93ac-aee91e33c4ae.jpg',
          'https://api-ecom.duthanhduoc.com/images/886dd1a2-30db-4734-99d8-9d7c678426b7.jpg',
          'https://api-ecom.duthanhduoc.com/images/96190778-61d9-4d53-a449-6a7ec4a33b8d.jpg'
        ],
        price: 982350,
        rating: 4.9,
        price_before_discount: 189000,
        quantity: 3224,
        sold: 523,
        view: 1611,
        name: 'Áo thun nam nữ cotton co giãn unisex Giisel phông trơn basic tee tay lỡ oversize form rộng 10 màu',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/d2fe4691-1d73-4bb2-8aec-afff5f13e83d.jpg',
        createdAt: '2021-05-25T14:02:47.426Z',
        updatedAt: '2024-05-09T20:06:39.850Z'
      },
      {
        _id: '60ad02f62fb52902585972aa',
        images: [
          'https://api-ecom.duthanhduoc.com/images/e81c7a6a-b3a4-470d-bc3a-e5a5bda78f97.jpg',
          'https://api-ecom.duthanhduoc.com/images/fea67f75-a44d-463f-9b6f-d6d72d841f89.jpg',
          'https://api-ecom.duthanhduoc.com/images/d263bd06-2c86-446b-b521-303f647ce7b9.jpg',
          'https://api-ecom.duthanhduoc.com/images/4e376852-472e-4de4-bc37-fa682620bd5b.jpg',
          'https://api-ecom.duthanhduoc.com/images/63fa304a-bd24-4def-8fd5-270362e1c145.jpg',
          'https://api-ecom.duthanhduoc.com/images/5dbd6ce2-139e-40b0-b270-631c17273349.jpg'
        ],
        price: 106000,
        rating: 0,
        price_before_discount: 189000,
        quantity: 3000,
        sold: 0,
        view: 711,
        name: '[MS 027] Áo thun nam cổ tròn siêu đẹp- Áo phông nam với chất liệu thun lạnh cực kì mát mẻ',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/e81c7a6a-b3a4-470d-bc3a-e5a5bda78f97.jpg',
        createdAt: '2021-05-25T14:00:22.209Z',
        updatedAt: '2024-05-07T09:32:09.550Z'
      },
      {
        _id: '60ad02422fb52902585972a9',
        images: [
          'https://api-ecom.duthanhduoc.com/images/08b79b1d-169d-4de1-85a2-4e5e8ff535b7.jpg',
          'https://api-ecom.duthanhduoc.com/images/182d6e25-65fa-4abe-b822-70d87550bf4e.jpg',
          'https://api-ecom.duthanhduoc.com/images/827e675d-e553-497e-9b15-d2df5fc7192d.jpg',
          'https://api-ecom.duthanhduoc.com/images/b6425e3f-3cc3-4696-94f7-5053afca2c71.jpg',
          'https://api-ecom.duthanhduoc.com/images/4d80b312-e605-4508-ab80-14dd75f6d23d.jpg',
          'https://api-ecom.duthanhduoc.com/images/9e628716-0b94-44d8-850c-e96adc4b1c8f.jpg',
          'https://api-ecom.duthanhduoc.com/images/20a1a8e5-1b49-4854-a221-0f96130b5fd8.jpg'
        ],
        price: 279000,
        rating: 5,
        price_before_discount: 315000,
        quantity: 1959,
        sold: 36,
        view: 632,
        name: '[Mã FAMALLT5 giảm 15% đơn 150K] Áo thun tay lỡ GENZ phông Unisex nam nữ Cotton oversize form rộng Racing Genz GZT021',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/08b79b1d-169d-4de1-85a2-4e5e8ff535b7.jpg',
        createdAt: '2021-05-25T13:57:22.760Z',
        updatedAt: '2024-05-09T17:27:50.584Z'
      },
      {
        _id: '60ad01992fb52902585972a8',
        images: [
          'https://api-ecom.duthanhduoc.com/images/ccb7fdb4-af25-4a4e-a13c-c4e1ca44682e.jpg',
          'https://api-ecom.duthanhduoc.com/images/b67d1471-d3ac-4677-b5ac-7519088b8e52.jpg',
          'https://api-ecom.duthanhduoc.com/images/ad676517-13f9-43a0-b1e6-0e7aaffbe26e.jpg',
          'https://api-ecom.duthanhduoc.com/images/e6b9533d-c0ac-49ca-bf88-07455099e742.jpg',
          'https://api-ecom.duthanhduoc.com/images/e42299f9-b7c6-4467-834d-305a64feda63.jpg',
          'https://api-ecom.duthanhduoc.com/images/52837508-ca01-4683-a56d-9070ea9b38c5.jpg',
          'https://api-ecom.duthanhduoc.com/images/da1c55e9-253c-4281-b095-e5fa970a2b59.jpg',
          'https://api-ecom.duthanhduoc.com/images/176c68c2-0bb3-4c4b-985e-d3faf2ad9ce7.jpg',
          'https://api-ecom.duthanhduoc.com/images/b014824b-4d8b-46f6-b94d-4ea8cae8c6d8.jpg'
        ],
        price: 100000,
        rating: 0,
        price_before_discount: 10000,
        quantity: 22396,
        sold: 0,
        view: 574,
        name: 'Áo Thun Tay Lỡ Basic Nhiều Màu Siêu Hot🍁 Unisex nam nữ đều mặc được',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/ccb7fdb4-af25-4a4e-a13c-c4e1ca44682e.jpg',
        createdAt: '2021-05-25T13:54:33.233Z',
        updatedAt: '2024-05-07T08:14:17.122Z'
      },
      {
        _id: '60ad01102fb52902585972a7',
        images: [
          'https://api-ecom.duthanhduoc.com/images/05f090b8-736e-4100-b4f4-7a09f48e718a.jpg',
          'https://api-ecom.duthanhduoc.com/images/594a2d08-04f4-4902-873f-e9ba865bc497.jpg',
          'https://api-ecom.duthanhduoc.com/images/0f906616-bc7f-4661-9bbe-5570b5d902b7.jpg',
          'https://api-ecom.duthanhduoc.com/images/e129d0b1-8a45-463a-a668-d619461ae984.jpg',
          'https://api-ecom.duthanhduoc.com/images/780a9d1a-74e9-4d8c-bbae-ed3d5eca8b97.jpg',
          'https://api-ecom.duthanhduoc.com/images/986f2f5b-23cc-498f-9adb-9d07e6923eb3.jpg',
          'https://api-ecom.duthanhduoc.com/images/e383805f-e875-4398-800d-ae07f2d2e8ce.jpg',
          'https://api-ecom.duthanhduoc.com/images/c3df0eba-05f8-4ba8-9ef4-f67a28fa4b81.jpg',
          'https://api-ecom.duthanhduoc.com/images/7cefd5f0-6ded-443d-821b-4909592e6490.jpg'
        ],
        price: 53000,
        rating: 5,
        price_before_discount: 106000,
        quantity: 16746,
        sold: 2255,
        view: 1164,
        name: 'Áo thun nam nữ tay lỡ YINXX, áo phông nam nữ form rộng A304',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/b1c008a6-bb10-46a6-8caf-2b0e9ca4e175.jpg',
        createdAt: '2021-05-25T13:52:16.271Z',
        updatedAt: '2024-05-07T08:14:31.494Z'
      },
      {
        _id: '60ad004c2fb52902585972a6',
        images: [
          'https://api-ecom.duthanhduoc.com/images/b1c008a6-bb10-46a6-8caf-2b0e9ca4e175.jpg',
          'https://api-ecom.duthanhduoc.com/images/2df345c5-4381-4863-9510-17f44572ad45.jpg',
          'https://api-ecom.duthanhduoc.com/images/00b21c79-e1a0-45f0-9152-6881e644b15b.jpg',
          'https://api-ecom.duthanhduoc.com/images/dc35e2ed-0407-4f27-9b97-bad9bc785deb.jpg',
          'https://api-ecom.duthanhduoc.com/images/f1de05b8-60c5-4940-be9f-b6cc98d34061.jpg',
          'https://api-ecom.duthanhduoc.com/images/4788c7fd-d728-4f47-8000-e858d6466384.jpg',
          'https://api-ecom.duthanhduoc.com/images/b4614934-0164-4845-bf14-d19de6c36835.jpg',
          'https://api-ecom.duthanhduoc.com/images/1ec5e192-c2fc-4411-b170-4aa2b1635ddb.jpg',
          'https://api-ecom.duthanhduoc.com/images/a751a941-7d74-4f2a-a238-c806b055ed11.jpg'
        ],
        price: 49000,
        rating: 5,
        price_before_discount: 70000,
        quantity: 6797,
        sold: 21,
        view: 956,
        name: 'Mẫu Mới Khuyến Mãi Sốc 3 Ngày ⚡ Áo Thun Tay Lỡ In Bướm Dirty Coins Ao Thun Unisex From Rộng -BONSEN STORE',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/b1c008a6-bb10-46a6-8caf-2b0e9ca4e175.jpg',
        createdAt: '2021-05-25T13:49:00.060Z',
        updatedAt: '2024-05-10T07:11:45.494Z'
      },
      {
        _id: '60acffba2fb52902585972a5',
        images: [
          'https://api-ecom.duthanhduoc.com/images/305f556f-31b3-45cc-b977-0448b1f82344.jpg',
          'https://api-ecom.duthanhduoc.com/images/e2ef5d37-514d-43f0-aca0-b61c4dcd42de.jpg',
          'https://api-ecom.duthanhduoc.com/images/b92d9525-5eab-4923-9e58-96da4557d765.jpg',
          'https://api-ecom.duthanhduoc.com/images/09c5e470-27eb-40bf-a768-f358a004b94e.jpg'
        ],
        price: 64000,
        rating: 5,
        price_before_discount: 90000,
        quantity: 27995,
        sold: 5,
        view: 421,
        name: 'Thun cotton , cực kỳ thoáng mát - Size: XS - S - M - L - XL - XXL - XXXL',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/305f556f-31b3-45cc-b977-0448b1f82344.jpg',
        createdAt: '2021-05-25T13:46:34.195Z',
        updatedAt: '2024-05-06T11:45:37.305Z'
      },
      {
        _id: '60acff3c2fb52902585972a4',
        images: [
          'https://api-ecom.duthanhduoc.com/images/d178114b-aaa8-4dae-adb6-8a92ba92bb13.jpg',
          'https://api-ecom.duthanhduoc.com/images/a57ca1fd-010a-48e1-b505-a5ebff6e3bd8.jpg',
          'https://api-ecom.duthanhduoc.com/images/b5a229c7-a93b-4344-85f4-81e0ba474137.jpg',
          'https://api-ecom.duthanhduoc.com/images/57c3e5f5-df0d-47e5-9a12-f95f1d3a8798.jpg',
          'https://api-ecom.duthanhduoc.com/images/7f4be47f-4aa5-4441-9f34-515f33f7bcca.jpg',
          'https://api-ecom.duthanhduoc.com/images/d3b06865-3616-4ab0-af50-c62b26a145c5.jpg',
          'https://api-ecom.duthanhduoc.com/images/a445084b-7294-4440-9eb5-c63281350899.jpg',
          'https://api-ecom.duthanhduoc.com/images/424fd522-361d-40d1-8bd1-250c4e707382.jpg',
          'https://api-ecom.duthanhduoc.com/images/f135b741-b82a-4cab-820b-43da88a72c45.jpg'
        ],
        price: 54000,
        rating: 4.999,
        price_before_discount: 60000,
        quantity: 799914,
        sold: 86,
        view: 394,
        name: 'Áo Thun Trơn Đen-Trắng Form Chuẩn Tay Ngắn, Chất COTTON Cao Cấp, AT09.1',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/d178114b-aaa8-4dae-adb6-8a92ba92bb13.jpg',
        createdAt: '2021-05-25T13:44:28.020Z',
        updatedAt: '2024-05-10T05:17:12.720Z'
      },
      {
        _id: '60acfe9c2fb52902585972a3',
        images: [
          'https://api-ecom.duthanhduoc.com/images/c49a6a50-b8a2-421b-86a6-fc73f438d9a2.jpg',
          'https://api-ecom.duthanhduoc.com/images/e444abbd-db41-42a6-84b0-009355f6f2de.jpg',
          'https://api-ecom.duthanhduoc.com/images/bc7e2744-6a2b-4191-9fb4-6db3a89646ba.jpg',
          'https://api-ecom.duthanhduoc.com/images/923d34ca-b36f-46f5-8658-82b5036f3c0e.jpg',
          'https://api-ecom.duthanhduoc.com/images/80473bdb-8457-4e17-a6eb-2906d5980f0b.jpg',
          'https://api-ecom.duthanhduoc.com/images/c205a063-3f6a-4330-a15a-65fd1af4a8e2.jpg',
          'https://api-ecom.duthanhduoc.com/images/f8506b5b-5d61-4967-a9ce-7fc740a37265.jpg',
          'https://api-ecom.duthanhduoc.com/images/c533dcea-cd2d-42cd-81eb-045135465a68.jpg',
          'https://api-ecom.duthanhduoc.com/images/21fe3f89-1e64-4605-ba00-08d026a47b43.jpg'
        ],
        price: 98000,
        rating: 4.95,
        price_before_discount: 196000,
        quantity: 8201,
        sold: 4250,
        view: 844,
        name: 'Áo thun nam mã TT5 💖FREESHIP💖 Áo tay lỡ nam form rộng thể thao cộc tay đẹp mùa hè ngắn tay tập gym vải cotton',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/c49a6a50-b8a2-421b-86a6-fc73f438d9a2.jpg',
        createdAt: '2021-05-25T13:41:48.165Z',
        updatedAt: '2024-05-10T18:04:28.163Z'
      },
      {
        _id: '60acfdd42fb52902585972a2',
        images: [
          'https://api-ecom.duthanhduoc.com/images/cd0a26e1-3792-458f-914c-8692dbb26b7a.jpg',
          'https://api-ecom.duthanhduoc.com/images/4a52af18-bd03-461b-8526-84219686541c.jpg',
          'https://api-ecom.duthanhduoc.com/images/95bbbef7-90f4-4425-acc9-7c728eb64338.jpg',
          'https://api-ecom.duthanhduoc.com/images/e7701a25-56a4-4db4-805f-30b07fe7b3b7.jpg',
          'https://api-ecom.duthanhduoc.com/images/ebde73c1-209f-44af-bde2-5c1d7e2b4c45.jpg',
          'https://api-ecom.duthanhduoc.com/images/87d44cc1-3dbe-4e55-bfa1-35b45360193a.jpg',
          'https://api-ecom.duthanhduoc.com/images/10d30b86-6634-4583-9d57-a5d30026ac69.jpg'
        ],
        price: 139000,
        rating: 4.785,
        price_before_discount: 240000,
        quantity: 1598,
        sold: 36,
        view: 290,
        name: 'Áo thun nam Havis cổ bẻ thun cá sấu 76 logo dập nổi cao cấp AXK038',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/cd0a26e1-3792-458f-914c-8692dbb26b7a.jpg',
        createdAt: '2021-05-25T13:38:28.959Z',
        updatedAt: '2024-05-09T17:45:06.844Z'
      },
      {
        _id: '60acfd4d2fb52902585972a1',
        images: [
          'https://api-ecom.duthanhduoc.com/images/960a6e64-c6eb-491f-a9cc-1a06acffdeef.jpg',
          'https://api-ecom.duthanhduoc.com/images/2966ecc3-b0b9-44b2-8fb8-684ea44f7816.jpg',
          'https://api-ecom.duthanhduoc.com/images/4c55841e-3e28-4252-a0c2-85aabb00ac69.jpg',
          'https://api-ecom.duthanhduoc.com/images/b9776bb5-b9b5-4005-9a98-e97ffccba82f.jpg',
          'https://api-ecom.duthanhduoc.com/images/ca89b1ee-d12a-4e0a-9175-5b1e45a4ebba.jpg'
        ],
        price: 69000,
        rating: 4.985,
        price_before_discount: 91000,
        quantity: 29150,
        sold: 16501,
        view: 1661,
        name: 'Áo thun nam thể thao cotton lạnh cao cấp tay ngắn Xanh AD03 Phong Cảnh Mẫu Trend Trẻ Trung Cá Tính (44-70KG)',
        category: {
          _id: '60aba4e24efcc70f8892e1c6',
          name: 'Áo thun',
          __v: 0
        },
        image: 'https://api-ecom.duthanhduoc.com/images/960a6e64-c6eb-491f-a9cc-1a06acffdeef.jpg',
        createdAt: '2021-05-25T13:36:13.145Z',
        updatedAt: '2024-05-10T13:07:02.428Z'
      }
    ],
    pagination: {
      page: 1,
      limit: 30,
      page_size: 2
    }
  }
}

const productDetailRes = {
  message: 'Lấy sản phẩm thành công',
  data: {
    _id: '60afb2426ef5b902180aacb9',
    images: [
      'https://api-ecom.duthanhduoc.com/images/aa374023-7a5b-46ea-aca3-dad1b29fb015.jpg',
      'https://api-ecom.duthanhduoc.com/images/b997dac2-2674-4e20-b5ee-459566b077e7.jpg',
      'https://api-ecom.duthanhduoc.com/images/ac328d77-6014-4a2d-8626-924ac35876df.jpg',
      'https://api-ecom.duthanhduoc.com/images/5061fefa-bded-4fb0-80e5-3623656a4816.jpg',
      'https://api-ecom.duthanhduoc.com/images/02c08a86-4d9b-437b-ae02-f1d49cf2933b.jpg',
      'https://api-ecom.duthanhduoc.com/images/12c405e3-b24f-46ef-8969-54050e1022e9.jpg',
      'https://api-ecom.duthanhduoc.com/images/d448057c-3d3d-45d2-a9bc-e984bc80555f.jpg'
    ],
    price: 2590000,
    rating: 4.2,
    price_before_discount: 3490000,
    quantity: 73,
    sold: 6800,
    view: 40326,
    name: 'Điện thoại OPPO A12 (3GB/32GB) - Hàng chính hãng',
    description:
      '<p>Thể hiện c&aacute; t&iacute;nh của bạn bằng thiết kế kim cương 3D độc đ&aacute;o của OPPO A12, c&ugrave;ng với m&agrave;n h&igrave;nh lớn &ldquo;giọt nước&rdquo; tuyệt mỹ v&agrave; camera k&eacute;p s&agrave;nh điệu, bạn sẽ lu&ocirc;n vui vẻ năng động suốt cả ng&agrave;y.</p><p>Thiết kế si&ecirc;u mỏng nhẹ, họa tiết kim cương 3D ấn tượng<br />OPPO A12 sở hữu thiết kế kh&ocirc;ng chỉ đẹp ph&aacute; c&aacute;ch m&agrave; c&ograve;n rất dễ d&agrave;ng để sử dụng tr&ecirc;n tay. Trọng lượng cực nhẹ 165gram, độ mỏng chỉ 8,3mm kết hợp với những đường bo cong kh&eacute;o l&eacute;o gi&uacute;p điện thoại v&ocirc; c&ugrave;ng gọn nhẹ, mượt m&agrave; trong l&ograve;ng b&agrave;n tay. Kiểu d&aacute;ng của OPPO A12 đặc biệt ấn tượng nhờ điểm nhấn l&agrave; mặt lưng họa tiết 3D kim cương độc đ&aacute;o. Ở mỗi g&oacute;c nh&igrave;n kh&aacute;c nhau, bạn sẽ thấy một vẻ đẹp kh&aacute;c nhau, gi&uacute;p chiếc điện thoại trở n&ecirc;n thực sự nổi bật.</p><p>M&agrave;n h&igrave;nh lớn 6,22 inch &ldquo;giọt nước&rdquo; bảo vệ mắt<br />Bạn sẽ được tận hưởng những h&igrave;nh ảnh hấp dẫn tr&ecirc;n OPPO A12 nhờ m&agrave;n h&igrave;nh lớn k&iacute;ch thước 6,22 inch, hiệu ứng tr&agrave;n viền dạng &ldquo;giọt nước&rdquo; đẹp mắt, tăng cường trải nghiệm xem phim, chơi game.</p><p>Mở kh&oacute;a theo c&aacute;ch của bạn<br />Kh&ocirc;ng cần phải nhập mật khẩu mỗi lần mở m&aacute;y nữa, OPPO A12 cho ph&eacute;p bạn đăng nhập bằng cảm biến v&acirc;n tay hoặc nhận diện khu&ocirc;n mặt AI rất tiện lợi. Chỉ cần chạm nhẹ v&agrave;o khu vực cảm biến mặt lưng hoặc đơn giản l&agrave; đưa m&aacute;y l&ecirc;n, điện thoại sẽ ngay lập tức nhận ra chủ nh&acirc;n của m&aacute;y v&agrave; mở kh&oacute;a một c&aacute;ch sẵn s&agrave;ng.</p><p>Bộ vi xử l&yacute; 8 nh&acirc;n mạnh mẽ<br />OPPO A12 sở hữu cấu h&igrave;nh đ&aacute;ng nể trong tầm gi&aacute; rẻ nhờ bộ vi xử l&yacute; Helio P35. Con chip mới từ nh&agrave; MediaTek sản xuất tr&ecirc;n tiến tr&igrave;nh 12nm với 8 nh&acirc;n cực mạnh, trong đ&oacute; 4 nh&acirc;n 2,35GHz v&agrave; 4 nh&acirc;n 1,8GHz đi c&ugrave;ng GPU đồ họa PowerVR GE8320.</p><p>Thời lượng pin suốt cả ng&agrave;y<br />Mang tr&ecirc;n m&igrave;nh vi&ecirc;n pin dung lượng cực &ldquo;khủng&rdquo; 4230 mAh, bạn c&oacute; thể thoải m&aacute;i sử dụng trong 2 ng&agrave;y ở nhu cầu sử dụng b&igrave;nh thường.</p><p>&Acirc;m thanh sống động<br />OPPO A12 được trang bị t&iacute;nh năng Dirac, một t&iacute;nh năng cho ph&eacute;p chuyển đổi c&aacute;c chế độ &acirc;m thanh th&ocirc;ng minh để tối ưu h&oacute;a &acirc;m thanh dựa tr&ecirc;n t&aacute;c vụ bạn đang hoạt động.</p><p>Camera k&eacute;p AI, tỏa s&aacute;ng trong từng bức ảnh<br />OPPO A12 sở hữu camera k&eacute;p ở mặt sau, bao gồm camera ch&iacute;nh 13MP v&agrave; camera 2MP hỗ trợ đo độ s&acirc;u trường ảnh. Camera ch&iacute;nh chất lượng mang đến những h&igrave;nh ảnh sắc n&eacute;t, r&otilde; r&agrave;ng v&agrave; độ s&aacute;ng, m&agrave;u sắc trung thực.</p><p>Th&ocirc;ng số kỹ thuật chi tiết<br />M&agrave;n h&igrave;nh<br />C&ocirc;ng nghệ m&agrave;n h&igrave;nh : IPS LCD<br />M&agrave;u m&agrave;n h&igrave;nh : 16 triệu m&agrave;u<br />Chuẩn m&agrave;n h&igrave;nh : HD +<br />Độ ph&acirc;n giải m&agrave;n h&igrave;nh : 720 x 1560 Pixels<br />M&agrave;n h&igrave;nh : 6.22 inches<br />Mặt k&iacute;nh m&agrave;n h&igrave;nh : Corning Gorilla Glass 3<br />Camera Trước<br />Độ ph&acirc;n giải : 5 MP<br />Th&ocirc;ng tin kh&aacute;c : Xo&aacute; ph&ocirc;ng, L&agrave;m đẹp (Selfie A.I Beauty), Nh&atilde;n d&aacute;n (AR Stickers), Flash m&agrave;n h&igrave;nh, To&agrave;n cảnh (Panorama), Quay video HD, Chụp bằng cử chỉ, Nhận diện khu&ocirc;n mặt, L&agrave;m đẹp (Beautify), Quay video Full HD, Tự động lấy n&eacute;t (AF), HDR<br />Camera Sau<br />Độ ph&acirc;n giải : Ch&iacute;nh 13 MP &amp; Phụ 2 MP<br />Quay phim : Quay phim HD 720p@30fps<br />Đ&egrave;n Flash : C&oacute;<br />Chụp ảnh n&acirc;ng cao : Google Lens, G&oacute;c si&ecirc;u rộng (Ultrawide), Nh&atilde;n d&aacute;n (AR Stickers), Chụp bằng cử chỉ, Xo&aacute; ph&ocirc;ng, Quay chậm (Slow Motion), Tr&ocirc;i nhanh thời gian (Time Lapse), A.I Camera, L&agrave;m đẹp, Tự động lấy n&eacute;t (AF)<br />Cấu h&igrave;nh phần cứng<br />Tốc độ CPU : 2.3GHz<br />Số nh&acirc;n : 4 nh&acirc;n 2.35 GHz &amp; 4 nh&acirc;n 1.9 GHz<br />Chipset : MediaTek Helio P35 8 nh&acirc;n<br />RAM : 3 GB<br />Chip đồ họa (GPU) : PowerVR GE8320<br />Cảm biến : Cảm biến tiệm cận, Cảm biến &aacute;nh s&aacute;ng, Cảm biến gia tốc kế<br />Bộ nhớ &amp; Lưu trữ<br />Danh bạ lưu trữ : Kh&ocirc;ng giới hạn<br />ROM : 32 GB<br />Bộ nhớ c&ograve;n lại : Đang cập nhật<br />Thẻ nhớ ngo&agrave;i : MicroSD<br />Hỗ trợ thẻ nhớ tối đa : 256 GB<br />Thiết kế &amp; Trọng lượng<br />Kiểu d&aacute;ng : Nguy&ecirc;n Khối<br />Chất liệu : Khung &amp; Mặt lưng nhựa<br />K&iacute;ch thước : D&agrave;i 155.9 mm - Ngang 75.5 mm - D&agrave;y 8.3 mm<br />Trọng lượng : 165 g<br />Khả năng chống nước : Đang cập nhật<br />Th&ocirc;ng tin pin<br />Loại pin : Pin chuẩn Li-Po<br />Dung lượng pin : 4230 mAh<br />Pin c&oacute; thể th&aacute;o rời : Kh&ocirc;ng<br />Chế độ sạc nhanh : Đang cập nhật<br />Kết nối &amp; Cổng giao tiếp<br />Loại SIM : 2 Nano SIM<br />Khe cắm sim : Dual nano-SIM + 1 khe thẻ nhớ<br />Wifi : Wi-Fi 802.11 a/b/g/n/ac, DLNA, Wi-Fi Direct, Wi-Fi hotspot<br />GPS : BDS, A-GPS, GLONASS<br />Bluetooth : Bluetooth 5.0<br />GPRS/EDGE : C&oacute;<br />NFC : Đang cập nhật<br />Cổng sạc : Micro USB<br />Jack (Input &amp; Output) : 3.5mm<br />Giải tr&iacute; &amp; Ứng dụng<br />Xem phim : C&oacute;<br />Nghe nhạc : C&oacute;<br />Ghi &acirc;m : C&oacute;<br />FM radio : C&oacute;<br />Đ&egrave;n pin : C&oacute;<br />Chức năng kh&aacute;c : Đang cập nhật<br />Bảo h&agrave;nh<br />Thời gian bảo h&agrave;nh : 12 Th&aacute;ng<br />Th&ocirc;ng tin h&agrave;ng h&oacute;a<br />Xuất xứ : Trung Quốc<br />Năm sản xuất : 2020<br />Th&ocirc;ng tin d&ograve;ng sản phẩm<br />Model Series : OPPO A12<br />Hệ điều h&agrave;nh<br />Hệ điều h&agrave;nh : ColorOS 6.1.2, nền tảng Android 9<br />Bộ sản phẩm bao gồm: Hộp, Sạc, S&aacute;ch hướng dẫn, C&aacute;p, C&acirc;y lấy sim, Ốp lưng</p><p>Th&ocirc;ng tin bảo h&agrave;nh: <br />Sản phẩm được bảo h&agrave;nh 12 th&aacute;ng tại c&aacute;c trung t&acirc;m bảo h&agrave;nh OPPO<br />- 1 đổi 1 trong 30 ng&agrave;y đầu sử dụng (Lỗi phần cứng sản xuất)<br />- Giao h&agrave;ng tr&ecirc;n to&agrave;n quốc<br />- Hotline: 1800 577 776 (miễn ph&iacute;).</p><p>#OPPO #OPPOA12</p>',
    category: {
      _id: '60afafe76ef5b902180aacb5',
      name: 'Điện thoại',
      __v: 0
    },
    image: 'https://api-ecom.duthanhduoc.com/images/aa374023-7a5b-46ea-aca3-dad1b29fb015.jpg',
    createdAt: '2021-05-27T14:52:50.392Z',
    updatedAt: '2024-05-11T03:09:24.483Z'
  }
}

const productsRequest = http.get(`${config.baseUrl}products`, () => {
  return HttpResponse.json(productsRes, { status: 200 })
})

const productDetailRequest = http.get(`${config.baseUrl}products/:id`, () => {
    return HttpResponse.json(productDetailRes, { status: 200 })
  })

const productRequest = [productsRequest, productDetailRequest]

export default productRequest
