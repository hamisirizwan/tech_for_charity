import 'package:flutter/material.dart';
import 'package:user_app/constants/image_paths.dart';
import 'package:user_app/routes/app_routes.dart';
import 'package:user_app/utilities/color_from_hex.dart';

class SingleCampaignScreen extends StatefulWidget {
  const SingleCampaignScreen({super.key});

  @override
  State<SingleCampaignScreen> createState() => _SingleCampaignScreenState();
}

class _SingleCampaignScreenState extends State<SingleCampaignScreen> {
  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: Scaffold(
          appBar: AppBar(
            title: const Text("Details"),
            centerTitle: true,
            elevation: 0,
            actions: const [
              Padding(
                padding: EdgeInsets.all(8.0),
                child: Icon(Icons.favorite_border_outlined, size: 30.0),
              )
            ],
          ),
          body: SingleChildScrollView(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              mainAxisAlignment: MainAxisAlignment.spaceBetween,
              children: [
                //image banner
                const SizedBox(
                  height: 25,
                ),
                Container(
                  margin: const EdgeInsets.all(16.0),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(12.0),
                    child: Container(
                      height: 250,
                      width: double.infinity,
                      child: Image(
                        image: AssetImage(ImageConstants.campaignImg1),
                        fit: BoxFit.cover,
                      ),
                    ),
                  ),
                ),
                //text
                Padding(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8),
                  child: Text(
                    "Education For All",
                    style: TextStyle(
                        fontSize: 20,
                        color: fromHex("#20417d"),
                        fontWeight: FontWeight.bold),
                  ),
                ),
                //progress
                Padding(
                  padding: EdgeInsets.all(16.0),
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      LinearProgressIndicator(
                        minHeight: 10,
                        value: 5500 /
                            7800, // Adjust the value based on the actual progress
                        backgroundColor: fromHex("#80899a"),
                        valueColor:
                            AlwaysStoppedAnimation<Color>(fromHex("#ed3103")),
                      ),
                    ],
                  ),
                ),
                //text
                Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 16.0),
                    child: Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        Row(
                          mainAxisAlignment: MainAxisAlignment.end,
                          children: [
                            Text(
                              "500/",
                              style: TextStyle(
                                  fontSize: 18,
                                  color: fromHex("#20417d"),
                                  fontWeight: FontWeight.bold),
                            ),
                            Text(
                              "7689",
                              style: TextStyle(
                                fontSize: 17,
                                color: fromHex("#20417d"),
                                
                              ),
                            ),
                          ],
                        ),
                        Text(
                          "86%",
                          style: TextStyle(
                              fontSize: 15,
                              color: fromHex("#20417d"),
                              fontWeight: FontWeight.bold),
                        ),
                      ],
                    )),
          
                    const SizedBox(height: 20,),
                //creator
                  // Container(
                  //   margin: const EdgeInsets.all(16),
                  //   height: 80,
                  //   width: double.infinity,
                  //   decoration: BoxDecoration(
                  //     color: Colors.grey[400],
                  //     borderRadius: BorderRadius.circular(16.0)
                  //   ),
                  // ),
                //description
             Padding(
                  padding:
                      const EdgeInsets.symmetric(horizontal: 16.0, vertical: 8),
                  child: Text(
                    "Empower futures with our 'Education for All' charity campaign. Help us break barriers to education, providing underprivileged children with access to learning resources. Join our mission for a world where every child has the chance to learn, dream, and thrive. Your support fuels the journey to make education a universal right, not a privilege. Together, let's build a brighter, more equitable future.",
                    style: TextStyle(
                        fontSize: 14,
                        color: fromHex("#20417d"),
                        ),
                  ),
                ),
                //donate button
          
                     GestureDetector(
                      onTap: ()=>{
                         Navigator.pushNamed(context, AppRoutes.paymentScreen)
                      },
                       child: Container(
                                         margin: const EdgeInsets.all(16),
                                         padding: const EdgeInsets.all(16),
                                        
                                         width: double.infinity,
                                         decoration: BoxDecoration(
                        color:fromHex("#20417d"),
                        borderRadius: BorderRadius.circular(16.0)
                                         ),
                                         child: const Text("Donate", textAlign: TextAlign.center,style: TextStyle(fontSize: 20, color: Colors.white),),
                                       ),
                     )
              ],
            ),
          )),
    );
  }
}
