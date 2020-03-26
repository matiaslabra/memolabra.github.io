rm -rf build  && yarn build && \                                              
cd build  && git init && git add . \
&& git commit -m "Last build from react branch" && \
git remote add origin https://github.com/matiaslabra/matiaslabra.github.io.git && \
git push --force origin master && cd ..