import 'package:flutter/material.dart';
import 'package:user_app/routes/app_routes.dart';

class FeaturedCampaignCard extends StatelessWidget {
  final String image;
  final String date;
  final String title;
  final String description;
  final VoidCallback onPressed;

  const FeaturedCampaignCard({
    required this.image,
    required this.date,
    required this.title,
    required this.description,
    required this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: ()=>{
        Navigator.pushNamed(context, AppRoutes.singleCampaignScreen)
      },
      child: Container(
        width: 200, // Adjust the width as needed
        margin: const EdgeInsets.symmetric(horizontal: 10),
      
        child: Card(
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(15),
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ClipRRect(
                borderRadius: const BorderRadius.vertical(top: Radius.circular(15)),
                child: Image.asset(
                  image,
                  height: 150, // Adjust the height as needed
                  width: double.infinity,
                  fit: BoxFit.cover,
                ),
              ),
              Padding(
                padding: const EdgeInsets.all(8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      date,
                      style: const TextStyle(
                        fontSize: 12,
                        color: Colors.grey,
                      ),
                    ),
                    const SizedBox(height: 5),
                    Text(
                      title,
                      style: const TextStyle(
                        fontSize: 16,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                    const SizedBox(height: 5),
                    Text(
                      description,
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(
                        fontSize: 14,
                        color: Colors.grey,
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
