import os
import sys

# Define PDF files
pdf_files = [
    "high pressure system.pdf",
    "raised_floor_systems web page.pdf",
    "rdiant heta and cool.pdf",
    "smart glass description.pdf"
]

output_dir = r"c:\Users\Jasim Nazar\Documents\project\src\assets\images"
os.makedirs(output_dir, exist_ok=True)

print(f"Output directory: {output_dir}")

# Try fitz (PyMuPDF) first since it's the best for image extraction
try:
    import fitz
    print("Using fitz (PyMuPDF)...")
    for pdf_name in pdf_files:
        pdf_path = os.path.join(r"c:\Users\Jasim Nazar\Documents\project", pdf_name)
        if not os.path.exists(pdf_path):
            print(f"File not found: {pdf_path}")
            continue
            
        print(f"\nProcessing {pdf_name}...")
        doc = fitz.open(pdf_path)
        img_count = 0
        for page_num in range(len(doc)):
            page = doc[page_num]
            image_list = page.get_images(full=True)
            for img_idx, img_info in enumerate(image_list):
                xref = img_info[0]
                base_image = doc.extract_image(xref)
                image_bytes = base_image["image"]
                image_ext = base_image["ext"]
                
                # Format output filename
                prefix = pdf_name.replace(".pdf", "").replace(" ", "_").replace("web_page", "").replace("description", "")
                filename = f"{prefix}_page_{page_num+1}_img_{img_idx+1}.{image_ext}"
                dest_path = os.path.join(output_dir, filename)
                
                with open(dest_path, "wb") as f:
                    f.write(image_bytes)
                print(f"Saved: {filename}")
                img_count += 1
        print(f"Extracted {img_count} images from {pdf_name}")
    sys.exit(0)
except ImportError:
    print("fitz not found, trying pypdf...")

# Try pypdf next
try:
    import pypdf
    print("Using pypdf...")
    for pdf_name in pdf_files:
        pdf_path = os.path.join(r"c:\Users\Jasim Nazar\Documents\project", pdf_name)
        if not os.path.exists(pdf_path):
            print(f"File not found: {pdf_path}")
            continue
            
        print(f"\nProcessing {pdf_name}...")
        reader = pypdf.PdfReader(pdf_path)
        img_count = 0
        for page_num, page in enumerate(reader.pages):
            for img_name, img_obj in page.images.items():
                image_bytes = img_obj.data
                # Find extension
                image_ext = "png"
                if hasattr(img_obj, "ext") and img_obj.ext:
                    image_ext = img_obj.ext
                elif ".jpg" in img_name.lower() or ".jpeg" in img_name.lower():
                    image_ext = "jpg"
                
                prefix = pdf_name.replace(".pdf", "").replace(" ", "_").replace("web_page", "").replace("description", "")
                filename = f"{prefix}_page_{page_num+1}_{img_name.replace('/', '_')}.{image_ext}"
                dest_path = os.path.join(output_dir, filename)
                
                with open(dest_path, "wb") as f:
                    f.write(image_bytes)
                print(f"Saved: {filename}")
                img_count += 1
        print(f"Extracted {img_count} images from {pdf_name}")
    sys.exit(0)
except ImportError:
    print("pypdf not found. Trying to install dependencies...")
    # Attempt to install pypdf via pip, then retry
    import subprocess
    try:
        subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf"])
        print("Successfully installed pypdf. Re-running script...")
        # Now run pypdf extraction
        import pypdf
        for pdf_name in pdf_files:
            pdf_path = os.path.join(r"c:\Users\Jasim Nazar\Documents\project", pdf_name)
            if not os.path.exists(pdf_path):
                continue
            reader = pypdf.PdfReader(pdf_path)
            for page_num, page in enumerate(reader.pages):
                for img_name, img_obj in page.images.items():
                    image_bytes = img_obj.data
                    image_ext = "png"
                    prefix = pdf_name.replace(".pdf", "").replace(" ", "_").replace("web_page", "").replace("description", "")
                    filename = f"{prefix}_page_{page_num+1}_{img_name.replace('/', '_')}.{image_ext}"
                    dest_path = os.path.join(output_dir, filename)
                    with open(dest_path, "wb") as f:
                        f.write(image_bytes)
                    print(f"Saved: {filename}")
        print("Done!")
    except Exception as e:
        print(f"Failed to install or run: {e}")
