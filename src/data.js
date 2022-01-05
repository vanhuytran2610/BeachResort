import lbh from "./images/langbacho.jpg";
import lbh1 from "./images/langbacho1.jpg";
import lbh2 from "./images/langbacho2.jpg";
import lbh3 from "./images/langbacho3.jpg";
import nrtb from "./images/nuirungtaybac.jpg";
import nrtb1 from "./images/nuirungtaybac1.jpg";
import nrtb2 from "./images/nuirungtaybac2.jpg";
import nrtb3 from "./images/nuirungtaybac3.jpg";
import bana from "./images/Bana.jpg";
import bana1 from "./images/Bana1.jpg";
import bana2 from "./images/Bana2.jpg";
import bana3 from "./images/Bana3.jpg";
import dnh from "./images/dainoihue.jpg";
import dnh1 from "./images/dainoihue1.jpg";
import dnh2 from "./images/dainoihue2.jpg";
import dnh3 from "./images/dainoihue3.jpg";
import sg from "./images/saigon.jpg";
import sg1 from "./images/saigon1.jpg";
import sg2 from "./images/saigon2.jpg";
import sg3 from "./images/saigon3.jpg";
import pq from "./images/phuquoc.png";
import pq1 from "./images/phuquoc1.png";
import pq2 from "./images/phuquoc2.png";
import pq3 from "./images/phuquoc3.png";

const room = [
    {
        sys: {
          id: "1"
        },
        fields: {
          name: "Lăng Bác Hồ",
          slug: "lang-bac-ho",
          category: "Lịch sử",
          region: "Miền Bắc",
          price: "Từ 0 đến 50.000 VND",
          address: "Số 2 đường Hùng Vương, phường Điện Bàn, quận Ba Đình, Hà Nội",
          time: "Từ 8:00 đến 11:30",
          featured: true,
          description: 
            "Lăng Bác được chính thức khởi công vào ngày 2/9/1973 và hoàn thành vào ngày 29/8/1975. Đây là nơi lưu giữ thi hài của Chủ tịch Hồ Chí Minh, vị lãnh tụ vĩ đại của dân tộc. Quần thể Lăng Bác bao gồm cả quảng trường Ba Đình, phủ chủ tịch, nhà sàn Bác Hồ. Mặt chính của lăng hướng về phía đông là Quảng trường Ba Đình. Lăng gồm 3 lớp với chiều cao 21,6m. Lớp dưới có kết cấu bậc nhiều cấp, có lễ đài dành cho đoàn chủ tịch khi diễn ra hoạt động mít tinh. Phần giữa là kết cấu trung tâm của lăng bao gồm phòng thi hài, hành lang, cầu thang lên xuống. Phần trên là mái lăng được cách điệu hình bông sen nở. Trước mặt chính lăng có dòng chữ Chủ tịch Hồ Chí Minh bằng đá hồng ngọc màu mận chín.",
          extras: [
            "Nghi lễ thượng cờ và hạ cờ.",
            "Ngắm nhìn được thi hài của Bác Hồ.",
            "Phong cảnh tuyệt đẹp trong lăng Bác.",
            "Chùa một cột phía sau lăng Bác.",
          ],
          images: [
            {
              fields: {
                file: {
                  url: lbh
                }
              }
            },
            {
              fields: {
                file: {
                  url: lbh1
                }
              }
            },
            {
              fields: {
                file: {
                  url: lbh2
                }
              }
            },
            {
              fields: {
                file: {
                  url: lbh3
                }
              }
            }
          ]
        }
      },

      {
        sys: {
          id: "2"
        },
        fields: {
          name: "Núi rừng Tây Bắc",
          slug: "nui-rung-tay-bac",
          category: "Khám phá",
          region: "Miền Bắc",
          price: "Miễn phí",
          address: "Điện Biên, Hòa Bình, Lai Châu, Lào Cai, Sơn La, Yên Bái",
          time: "Từ mùa đông đến mùa xuân",
          featured: false,
          description:
            "Giữa những ngày hè nóng bức, các tín đồ du lịch chắc hẳn đang ấp ủ cho mình kế hoạch đi du lịch “đổi gió”, rời xa ồn ào, khói bụi nơi phố thị. Trong vô vàn những điểm du lịch hấp dẫn của Việt Nam, có một Tây Bắc nên thơ, hùng vĩ đã làm say đắm bao nhiêu trái tim các “tín đồ ưa xê dịch”.",
          extras: [
            "Chiêm ngưỡng những thửa ruộng bậc thang tuyệt đẹp.",
            "Khí hậu trong lành, có chút se se lạnh.",
            "Thích hợp cho việc chụp ảnh cưới hoặc quay phim.",
            "Dịch vụ cắm trại.",
          ],
          images: [
            {
              fields: {
                file: {
                  url: nrtb
                }
              }
            },
            {
              fields: {
                file: {
                  url: nrtb1
                }
              }
            },
            {
              fields: {
                file: {
                  url: nrtb2
                }
              }
            },
            {
              fields: {
                file: {
                  url: nrtb3
                }
              }
            }
          ]
        }
      },

      {
        sys: {
          id: "3"
        },
        fields: {
          name: "Bà Nà Hills",
          slug: "ba-na-hills",
          category: "Khám phá",
          region: "Miền Trung",
          price: "Từ 400.000 đến 700.000 VND",
          address: "Xã Hòa Ninh, Huyện Hòa Vang, Thành phố Đà Nẵng",
          time: "Từ 8:00 đến 17:00",
          featured: false,
          description:
            "Bà Nà Hills được biết đến là một trong những địa điểm nổi tiếng bậc nhất tại Việt Nam mà bất kỳ du khách nào cũng không thể bỏ qua. Nơi này được ví von như chốn ‘’tiên cảnh’’, như một ‘’châu Âu thu nhỏ trong lòng thành phố’’ với những công trình kiến trúc cổ đẹp ma mị, những trò chơi giải trí cực kỳ hấp dẫn hay cả một vườn hoa thơm ngát ngào ngạt chờ đón du khách đến chụp hình. Tất cả đã tạo nên một Bà Nà Hills cực kỳ độc đáo khiến cho bất kỳ du khách nào đã đến thì đều không nỡ bước chân đi. VietSense travel sẽ giới thiệu tổng quan về Bà Nà Hills để giúp du khách có thể tận hưởng và khám phá địa danh du lịch này một cách trọn vẹn nhất.",
          extras: [
              "Cáp treo đạt kỷ lục Châu Á.",
              "Cầu Vàng - Kỳ quan mới của thế giới.",
              "Những ngôi làng Pháp thơ mộng.",
              "Khí hậu một ngày có bốn mùa.",
              "Thích hợp cho chụp ảnh cưới, quay phim."
          ],
          images: [
            {
              fields: {
                file: {
                  url: bana
                }
              }
            },
            {
              fields: {
                file: {
                  url: bana1
                }
              }
            },
            {
              fields: {
                file: {
                  url: bana2
                }
              }
            },
            {
              fields: {
                file: {
                  url: bana3
                }
              }
            }
          ]
        }
      },

      {
        sys: {
          id: "4"
        },
        fields: {
          name: "Đại nội Huế",
          slug: "dai-noi-hue",
          category: "Lịch sử",
          region: "Miền Trung",
          price: "Từ 30.000 đến 150.000 VND",
          address: "Đường 23/8, phường Thuận Hòa, Thành phố Huế, tỉnh Thừa Thiên Huế",
          time: "Từ 7:00 đến 17:30",
          featured: true,
          description:
            "Khu Đại Nội Huế được xây dựng từ đầu thế kỷ 19 đến nửa đầu thế kỷ 20, là một trong số các di tích thuộc cụm Quần thể di tích Cố đô Huế được công nhận là Di sản Văn hoá Thế giới UNESCO từ năm 1993. Toàn cảnh Đại Nội Huế còn lưu giữ nhiều dấu ấn đặc sắc của phong kiến triều đình nhà Nguyễn hàng trăm năm. Đại Nội Huế chính là nơi sinh hoạt và diễn ra các hoạt động của vua chúa Nguyễn cùng triều đình phong kiến cuối cùng của nước ta. Đại Nội Huế có thể xem là một công trình có quy mô đồ sộ nhất trong lịch sử Việt Nam từ trước đến nay. Đại Nội Huế có quá trình xây dựng kéo dài trong nhiều năm với hàng vạn người thi công cùng hàng loạt các công việc như lấp sông, đào hào, đắp thành, bên cạnh đó là khối lượng đất đá khổng lồ lên đến hàng triệu mét khối.",
          extras: [
              "Kinh thành lớn nhất cả nước.",
              "Nhiều hiện vật từ thời nhà Nguyễn.",
              "Được hóa thân thành Vua và Hoàng Hậu.",
              "Nằm ngay trung tâm của thành phố Huế.",
            ],
          images: [
            {
              fields: {
                file: {
                  url: dnh
                }
              }
            },
            {
              fields: {
                file: {
                  url: dnh1
                }
              }
            },
            {
              fields: {
                file: {
                  url: dnh2
                }
              }
            },
            {
              fields: {
                file: {
                  url: dnh3
                }
              }
            }
          ]
        }
      },

      {
        sys: {
          id: "5"
        },
        fields: {
          name: "Sài Gòn",
          slug: "sai-gon",
          category: "Khám phá",
          region: "Miền Nam",
          price: "Bao nhiêu cũng có",
          address: "Thành phố Hồ Chí Minh",
          time: "Từ 14:00 đến 4:00",
          featured: true,
          description:
            "So với Hà Nội nghìn năm văn hiến thì Sài Gòn vài trăm tuổi là một thành phố trẻ, nhưng lại chiếm ngôi đầu về nhịp sống sôi động, hiện đại. Thành phố với đủ các hoạt động ăn – chơi sôi nổi nhất này luôn thu hút du khách đến tham quan và trải nghiệm.",
          extras: [
              "Thành phố lớn nhất Việt Nam.",
              "Giao lưu văn hóa của nhiều quốc gia.",
              "Nhiều dịch vụ vui chơi, giải trí.",
              "Ẩm thực phong phú.",
              "Tòa nhà Lankmark 81 cao nhất cả nước.",
              "Nhiều trung tâm thương mại."
            ],
          images: [
            {
              fields: {
                file: {
                  url: sg
                }
              }
            },
            {
              fields: {
                file: {
                  url: sg1
                }
              }
            },
            {
              fields: {
                file: {
                  url: sg2
                }
              }
            },
            {
              fields: {
                file: {
                  url: sg3
                }
              }
            }
          ]
        }
      },

      {
        sys: {
          id: "6"
        },
        fields: {
          name: "Đảo ngọc Phú Quốc",
          slug: "dao-ngoc-phu-quoc",
          category: "Nghỉ dưỡng",
          region: "Miền Nam",
          price: "Từ 5 triệu đến 50 triệu VND",
          address: "Phú Quốc, tỉnh Kiên Giang",
          time: "Từ tháng 4 đến tháng 9",
          featured: false,
          description:
            "Được mệnh danh là hòn đảo lớn nhất Việt Nam, du lịch Phú Quốc may mắn được thiên nhiên ưu đãi với làn nước trong, bờ cát trắng mịn, và những khu rừng hoang sơ. Lỡ lạc chân vào “đảo ngọc” rồi, hãy tận hưởng một chút “Vitamin Sea” trong cái nắng dịu nhẹ ở Bãi Dài phía tây Phú Quốc và Bãi Sao phía đông Phú Quốc. Du lịch Phú Quốc không chỉ có biển, hãy thử các trải nghiệm thú vị khác như khám phá hòn đảo bằng xe máy, tham quan công viên bảo tồn động vật Vinpearl Safari, lặn san hô, hay chèo thuyền kayak. Cuối cùng, đừng quên thưởng thức các món hải sản ngon tuyệt vời khi du lịch Phú Quốc tự túc nhé!",
          extras: [
              "Đảo ngọc lớn nhất cả nước.",
              "Biển xanh trong, cát trắng mịn.",
              "Nhiều dịch vụ vui chơi dưới nước.",
              "Hải sản tươi sống.",
              "Nhiều resort nghỉ dưỡng 5 sao.",
              "Có sân bay quốc tế Phú Quốc."
            ],
          images: [
            {
              fields: {
                file: {
                  url: pq
                }
              }
            },
            {
              fields: {
                file: {
                  url: pq1
                }
              }
            },
            {
              fields: {
                file: {
                  url: pq2
                }
              }
            },
            {
              fields: {
                file: {
                  url: pq3
                }
              }
            }
          ]
        }
      }
];

export default room;


