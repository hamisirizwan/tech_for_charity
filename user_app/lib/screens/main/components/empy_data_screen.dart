import 'package:flutter/material.dart';
import 'package:user_app/constants/image_paths.dart';
import 'package:flutter_svg/flutter_svg.dart';

class EmptyData extends StatelessWidget {
  final String text;

  const EmptyData({Key? key, required this.text}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return  Center(
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          // Illustration
          SvgPicture.asset( 
          ImageConstants.emptyData, 
          semanticsLabel: 'My SVG Image', 
          height: 120, 
          width: 100, 
          ),

          const SizedBox(height: 25,),
          // Text
           Text("No $text found", style: const TextStyle(fontSize: 16),),
        ],
      ),
    );
  }
}